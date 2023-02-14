# BLOG API DOCUMENTATION

## Insert New Blog
Url = `http://localhost:5000/api/blog`;
Method = `POST`;
Value =;
```json 
    {
        title: "This is For Title",
        subBody: "Sub Body",
        body: "Body",
        author: "author",
        file: "FileName"
    }
```

## Get All Blogs
Url = `http://localhost:5000/api/blogs/`;
Method = `GET`;
Will return Array of Object;
```json
[
    {
        title: "This is Title",
        subBody: "This is Sub Body",
        body: "This is Body",
        author: "This is Name of Author",
        createdAt: "This is date of create a Blog",
        file: "FileName"
    }
]
```

## Get Blog By Id
Url = `http://localhost:5000/api/blog/{idBlog}`;
Method = `GET`;
Will Return an Object;
```json
    {
        title: "This is Title",
        subBody: "This is Sub Body",
        body: "This is Body",
        author: "This is Name of Author",
        createdAt: "This is date of create a Blog",
        file: "FileName"
    }
```

## Update Blog
Url = `http://localhost:5000/api/blog/{idBlog}`;
Method = `PATCH`;
You can fill in all data or only some;
For update Image im stil processing to develop;
For example:
```json
    {
        title: "This is Title",
        subBody: "This is Sub Body",
        body: "This is Body",
        author: "This is Name of Author",
        file: "FileName"
    }
```
or you can do this:
```json
    {
        body: "This is Body",
    }
```

And will Return an Object
```json
    {
        title: "This is Title",
        subBody: "This is Sub Body",
        body: "This is Body",
        author: "This is Name of Author",
        createdAt: "This is date of create a Blog",
        updatedAt: "This is date of Update Blog",
        file: "FileName"
    }
```

## Remove Blog
Url = `http://localhost:5000/api/blog/{idBlog}`;
Method = `DELETE`;
if Sucess, it wil Return;
```json
    {
        message: "Succes Delete Blog",
        statusCode: 200
    }
```