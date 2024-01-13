import React from "react";

const user = {
    name: "Lady Lamarr",
    imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
    imageSize: 90,
}

const user1 = {
    name: "BROOK SOUL KING",
    imageUrl: "https://preview.redd.it/brook-future-feats-discussion-v0-g8tfxr6ztvta1.jpg?width=1080&format=pjpg&auto=webp&s=59b60e23eb091632871883f33f36ec750f39bd7e",
    imageSize: 666,
}

export default function Profile() {
    return (
        <>
            <div className="user">
                <h1>{user.name}</h1>
                <img
                    className="avatar"
                    src={user.imageUrl}
                    alt={"Photo of" + user.name}
                    style={{ width: user.imageSize, height: user.imageSize }}
                />
            </div>

            <div className="user1">
                <h1>{user1.name}</h1>
                <img
                    className="avatar"
                    src={user1.imageUrl}
                    alt={"Photo of" + user1.name}
                    style={{ width: user1.imageSize, height: user1.imageSize }}
                />
            </div>
        </>
    );
}
