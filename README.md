前端MockServer操作說明
---

拷貝專案


1. 透過git將專案拷貝至您的開發機中

 ```
 # git clone <git project url>
```
2. 切換至專案目錄

 ```
 # cd <projet folder>
```
3. 建構專案image

 ```
 # docker-compose build
```
4. 啟動專案環境

 ```
 # docker-compose up -d
```
5. 關閉專案環境

 ```
  # docker-compose stop
```
- - -

Docker 相關操作說明

1. 列出目前開發機上擁有的images

 ```
 # docker images
 ```
2. 列出目前開發機上正在執行的container

 ```
 # docker ps
 ```
3. 連線進入某個container中

 ```
# docker exec -it <container ID> /bin/bash