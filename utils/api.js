const baseUrl = 'http://127.0.0.1:8000';
const api = {
    'blog_list': baseUrl + '/api/blog_list',
    'blog_detail': baseUrl + '/api/blog_detail',
    'blog_search': baseUrl + '/api/blog_search',
    'blog_update': baseUrl + '/api/blog_update',
    'tag_blog_list': baseUrl + '/api/tag_blog_list',
    'comment_list': baseUrl + '/api/comment_list',
    'comment_add': baseUrl + '/api/comment_add',
}

export {
    api
}