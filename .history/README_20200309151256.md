# 运行方法
node xxx.js

通过 localhost:3000?name=\<script>alert(1)\</script>来看，浏览器会对查询字符串中的中的符号进行ASCII转码
query中显示正常，querystring显示ASCII码