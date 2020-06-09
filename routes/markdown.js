const express = require("express")
const router = express.Router();

const {createMarkdown,findMarkdown,loadMarkdown,updateMarkdown} = require("../handler/markdown")

// add_page
router.post('/add_page',createMarkdown)
// retrieve_page_html
router.get('/retrieve_page_html/:titleId',findMarkdown)
// set_page_markdown
router.post('set_page_markdown',updateMarkdown)
// list_pages
router.get('/list_pages',loadMarkdown)

module.exports = router