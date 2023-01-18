# russian-recipe-blog
#項目實現  
1.jwt登入、登出功能，bcrypt密碼加鹽  
2.權限驗證(登入者才能發文)  
3.權限管控(作者才能改文章)  
4.自定義包裝debounce函數  
5.mobx開關彈窗、搜尋數據  
6.根據標題、標籤進行模糊搜尋  
7.觀看人數計數器

#項目導覽
1.登入頁面
![image](https://user-images.githubusercontent.com/113624708/213185175-ef806d41-59f4-42e8-82fc-b63d99fddc17.png)
2.登入重定向，並禁止返回login頁面。使用者登入後改變頂部組件渲染，可以按+進行頁面新增
![image](https://user-images.githubusercontent.com/113624708/213185368-18c38140-af8c-4ee3-af68-7ac9a4349268.png)
3.新增頁面彈窗
![image](https://user-images.githubusercontent.com/113624708/213185758-247b6888-8ec8-418f-8975-c4b100df526c.png)
4.文章頁面，作者可以修改文章
![image](https://user-images.githubusercontent.com/113624708/213186006-8eb3525a-c3c1-426e-9959-8e101a5f7fc6.png)
![image](https://user-images.githubusercontent.com/113624708/213186154-c31bc544-4272-491e-a4c3-c8bcc5e5fbe3.png)
5.文章頁面，非作者通過改變URL能跳轉頁面但不能修改文章
![image](https://user-images.githubusercontent.com/113624708/213186262-517b1723-020b-4d67-b4ac-bee5c06dc098.png)
![image](https://user-images.githubusercontent.com/113624708/213188812-07b68326-aa24-4df6-98ba-c9f59e6a51f4.png)
6.搜尋功能進行debounce優化，並能對標題、標籤進行模糊搜尋
![image](https://user-images.githubusercontent.com/113624708/213189414-23a57c86-8a71-4ec7-aecf-ac87abc03a2f.png)
![image](https://user-images.githubusercontent.com/113624708/213189559-37a8bd4a-00b1-4bc8-81f2-6a48f61aef6e.png)




