1-3. 同期タグの検証

# 環境
PHP 7.3.2

# セット
`sync` ディレクトリを任意のローカルにDLしたら、PHPのビルトインサーバーを立ち上げる
```
cd sync
php -S localhost:3000
```

サンプルのURL

同期タグ
http://localhost:3000/sample-default.html

非同期タグ(async)
http://localhost:3000/sample-async.html

非同期タグ(async)内でdocument.writeが使われていた場合の挙動
http://localhost:3000/sample-async-with-write.html

iframe内で同期タグ
http://localhost:3000/sample-with-iframe.html