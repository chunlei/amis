define('docs/renderers/Button-Group.md', function(require, exports, module) {

  module.exports = {
    "html": "<h2><a class=\"anchor\" name=\"button-group\" href=\"#button-group\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>Button-Group</h2><p>按钮集合。</p>\n<ul>\n<li><code>type</code> 请设置成 <code>button-group</code></li>\n<li><code>buttons</code> 配置按钮集合。</li>\n</ul>\n<div class=\"amis-preview\" style=\"height: 400px\"><script type=\"text/schema\" height=\"400\" scope=\"body\">{\n  \"type\": \"button-toolbar\",\n  \"buttons\": [\n    {\n      \"type\": \"button-group\",\n      \"buttons\": [\n        {\n          \"type\": \"button\",\n          \"label\": \"Button\",\n          \"actionType\": \"dialog\",\n          \"dialog\": {\n            \"confirmMode\": false,\n            \"title\": \"提示\",\n            \"body\": \"对，你刚点击了！\"\n          }\n        },\n\n        {\n          \"type\": \"submit\",\n          \"label\": \"Submit\"\n        },\n\n        {\n          \"type\": \"reset\",\n          \"label\": \"Reset\"\n        }\n      ]\n    },\n\n    {\n      \"type\": \"submit\",\n      \"icon\": \"fa fa-check text-success\"\n    },\n\n    {\n      \"type\": \"reset\",\n      \"icon\": \"fa fa-times text-danger\"\n    }\n  ]\n}\n</script></div>\n",
    "toc": {
      "label": "目录",
      "type": "toc",
      "children": [
        {
          "label": "Button-Group",
          "fragment": "button-group",
          "fullPath": "#button-group",
          "level": 2
        }
      ],
      "level": 0
    }
  };

});