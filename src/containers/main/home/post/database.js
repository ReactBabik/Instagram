import Realm from 'realm';

class InfoSchema extends Realm.Object { }

InfoSchema.schema =
{
    name: "Instagram",
    properties:
    {
        id: "int",
        username: "string",
        likes: "int",
        comments: "int",
        commentString: "string",
        imgUrl: "string",
    }
};

export const realm = new Realm({ schema: [InfoSchema], schemaVersion: 1 });

let getAllInfo = () => {
    return realm.objects("Instagram");
};

let AddPost = (_username, _commentString, _imgUrl) => {
    console.log(_username);
    console.log(_commentString);
    console.log(_imgUrl);
    const ID = realm.objects("Instagram").max("id");
    const Like_Count = realm.objects("Instagram").max("likes");
    const Comment_count = realm.objects("Instagram").max("comments");

    console.log("Before>>>>>>>>>>>>Id: " + ID);
    console.log("Before>>>>>>>>>>>>likes: " + Like_Count);
    console.log("Before>>>>>>>>>>>>comments: " + Comment_count);
    let post;
    try {
        realm.write(() => {
           post = realm.create("Instagram",
                {
                    username: _username,
                    id: ID + 1,
                    likes: Like_Count + 1,
                    comments: Comment_count + 1,
                    commentString: _commentString,
                    imgUrl: _imgUrl,
                });
        });
    }
    catch (error) {
        console.log(error);
    }
}

let deleteAPost = (_id) => {
    let deleteOnePost = realm.objects("Instagram")[_id];
    realm.write(() => {
        realm.delete(deleteOnePost);
        deleteOnePost = null;
    });
}

let deleteDataAboveOne = () => {
    let realmRefresh = realm.objects("Instagram").filtered("id > 1 && likes > 1");
    realm.write(() => {
        realm.delete(realmRefresh);
        realmRefresh = null;
    });

}

let AddComment = (_comment, _id) => {
    realm.write(() => {
        const commentAdded = realm.objects("Instagram")[_id];
        commentAdded.commentString = _comment;
        commentAdded.comments += 1;
    })
}

let AddImage = (_imgUrl, _id) => {
    realm.write(() => {
        const imageAdded = realm.objects("Instagram")[_id];
        imageAdded.imgUrl = _imgUrl;
    })
}

let AddLikes = (_id) => {
    console.log("ID recieved: " + _id);
    //let filteredID = realm.objects("Instagram").filtered("id == $0", _id);
    //let filteredID = realm.objects("Instagram").filtered('id == _id');
    realm.write(() => {
        const filteredID = realm.objects("Instagram")[_id];
        console.log("Before: " + filteredID.likes);
        filteredID.likes += 1;
        console.log("After: " + filteredID.likes)
    })
    
}

let deleteAllPost = () => {
    realm.write(() => {
        realm.delete(getAllInfo());
    });
}

export default realm;

export {
    getAllInfo,
    AddComment,
    AddPost,
    AddImage,
    AddLikes,
    deleteAllPost,
    deleteDataAboveOne,
    deleteAPost
};
