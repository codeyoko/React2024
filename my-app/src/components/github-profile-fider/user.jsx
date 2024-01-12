


export default function User({user}){

    const { name,avatar_url,created_at, url, login } = user;

    const creataedDate = new Date(created_at);
    const isEmptyObj = Object.keys(user).length === 0;
    console.log(isEmptyObj);
    return (
        
        <div className="user">
            {isEmptyObj === false
                ?   
                    <div>
                        <div className="user-avatar">
                            <img src={avatar_url} alt={name} />
                        </div>
                        <div className="user-login">
                            <a href={`https://github.com/users/${login}`}>{login}</a>
                            <p>
                                User joined on {`${creataedDate.getDate()} ${creataedDate.toLocaleString('en-us', {month:'long'})} ${creataedDate.getFullYear()}`}
                            </p>
                            <p>
                                URL: {url}
                            </p>
                        </div>
                    </div>
                :
                    <div>Data not found!</div>

            }
            

        </div>
    )
    
       
}