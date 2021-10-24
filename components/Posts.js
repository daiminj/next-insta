import Post from "./Post";

const posts= [
    {
        id:'123',
        username:'liza',
        userImg:'https://links.papareact.com/3ke',
        img:'https://links.papareact.com/3ke',
        caption:'Like is so easy,But Love is not.'
    },
    {
        id:'123',
        username:'liza',
        userImg:'https://links.papareact.com/3ke',
        img:'https://links.papareact.com/3ke',
        caption:'Like is so easy,But Love is not.'
    }
]
export default function Posts() {
    return (
        <div>
            {posts.map((post)=>(
                <Post key={post.id}
                    id={post.id}
                    username={post.username}
                    userImg={post.userImg}
                    img={post.img}
                    caption={post.caption}
                />
            ))}

        </div>
    )
}
