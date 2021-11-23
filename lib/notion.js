import { Client } from '@notionhq/client';
import { v4 as uuid } from 'uuid';
const notion = new Client({
  auth: process.env.NOTION_SECRET,
});

export const getDatabase = async (database_id, page_size = 10, start_cursor) => {
  const response = await notion.databases.query({
    database_id,
    page_size,
    start_cursor,
    filter: {
      and: [
        {
          property: 'status',
          select: {
            equals: 'published',
          },
        },
        {
          property: 'slug',
          rich_text: {
            is_not_empty: true,
          },
        },
      ],
    },
  });
  return response.results;
};

export const getChildDatabase = async (database_id, page_size = 10, start_cursor) => {
  const response = await notion.databases.query({
    database_id,
    page_size,
    start_cursor,
  });
  return response.results;
};

export const getPages = async (databaseId) => {
  const response = await notion.databases.query({
    database_id: databaseId,

  });
  return response.results;
};

export const getPage = async (pageId) => {
  const response = await notion.pages.retrieve({ page_id: pageId });
  return response;
};

export const getBlocks = async (block_id, start_cursor) => {
  const response = await notion.blocks.children.list({
    block_id,
    // start_cursor,
    page_size: 100,
  });
  return response.results;
};

const childDatabaseBlocks = async (blocks) => {
  return await Promise.all(
      blocks.map(async (block) => {
          if (block.type === 'child_database') {

            console.log(block.id)
            const database = await getChildDatabase(block.id)
            console.log(database[0].properties.rel)

          }

        return block
      })
    )
  }

const jsxBlocks = (blocks) => {
  // Render code blocks with the format of json as custom react component blocks
  return blocks.map(block => {
    if (block.type === 'code' && block[block.type].language === 'webassembly') {
      block.type = "jsx"
      block.jsx = { ...block.code }
      delete block.code
    }
    return block
  })
}

const listBlocks = (blocks) => {
  let list = []
  // let created_time, last_edited_time

  return blocks.map((block, index, elements) => {
    if (block.type !== 'bulleted_list_item' && block.type !== 'numbered_list_item') {
      return block
    }

    list.push(block)

    // if (!created_time || Date.parse(block.created_time) > Date.parse(created_time)) {
    //   created_time = block.created_time
    // }
    // if (!last_edited_time || Date.parse(block.last_edited_time) > Date.parse(last_edited_time)) {
    //   last_edited_time = block.last_edited_time
    // }

    if (elements[index+1] && elements[index+1].type === block.type){
      return false
    }

    /** Here we set the type of list to match the list item.
        The type of the wrapper block becomes either bullet_list or numbered_list
    */
    const type = block.type.substr(0, block.type.indexOf('_item'))

    /** We build out the block object to match closely to the native Notion blocks. We don't have an id, created_time, or last_edited_time, but we could do some work to set the times to the most recently edited child element, and generate an id. But since we don't currently use those attributes, we haven't bothered */
    const listBlock = {
      object: 'block',
      id: uuid(),
      created_time: null,
      last_edited_time: null,
      has_children: true,
      archived: false,
      type,
      [type]: {
        children: [...list],
      }
    }
    list = [] // Reset list
    return listBlock

  }).filter(item => item) // Remove root level list items
}

const getBlockChildren = async (blocks) => {

  /** This is a recursive function to look for an populate block children. This could result in a lot of api calls */

  let blockList = await Promise.all(
    blocks.map(async (block) => {

      delete block.object
      delete block.last_edited_time
      delete block.created_time
      delete block.archived

      if (!block.has_children) { return block }

      // Populate the block children
      block[block.type].children = await getBlocks(block.id)

      // If the current block has children, populate them too
      if (block[block.type].children.length > 0) {
        block[block.type].children = await getBlockChildren(block[block.type].children)
      }

      return block

    })
  );

  // Transform Results
  blockList = listBlocks(blockList)
  blockList = jsxBlocks(blockList)
  blockList = await childDatabaseBlocks(blockList)

  return blockList;
}


export const getPopulatedBlocks = async (blockId) => {

  let blocks = await getBlocks(blockId)

  // if (blocks.length === 100) {
  //   blocks = [...blocks, await getBlocks(blockId, "100")]
  // }
  // console.log(blocks.length)

  blocks = await getBlockChildren(blocks)

  return blocks;
}

export const getPostBySlug = async (slug, database_id) => {
  const post = await notion.databases.query({
    database_id,
    filter: {
      and: [
        {
          property: 'status',
          select: {
            equals: 'published',
          },
        },{
          property: 'slug',
          text: {
            equals: slug,
          },
        },
      ],
    },
  });

  const page_id = post?.results[0]?.id;

  if (!page_id) return { page: false, blocks: false }

  const [page, blocks] = await Promise.all([
    notion.pages.retrieve({ page_id }),
    getPopulatedBlocks(page_id)
  ])

  return { page, blocks }

};


