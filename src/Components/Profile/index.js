import React from "react";

const Profile = () => {
    return (
        <div>
            <div className="mt-4">
                <img className="m-auto d-block" width={243} height={243}  src="/images/avatar.png" alt=""/>
                <div className="text-center">
                    <h1>@HectorP123</h1>
                    <h1>Hector Padilla</h1>
                </div>
            </div>
            <h1>Favorite Albums</h1>
            <h1>Favorite Artists</h1>
            <h1>Friends</h1>
        </div>
        
    );

}

export default Profile