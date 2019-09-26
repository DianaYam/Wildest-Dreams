
import React from 'react';

import Post from '../Post/Post';
import SectionHeader from '../UI/SectionHeader/SectionHeader';
import {beautifulDate, containsItem} from '../../usefulFunctions/usefulFunctions';
import './MyProfile.css';

const MyProfile = props => {

    const getCurrentUser = () => {
        return (
            props.people.find((person) => {
                return person.id === props.user
            })
        )
    };

    const renderWrittenPosts = () => {
        const writtenPosts = props.posts.filter(post => post.author === getCurrentUser().id);

        if (writtenPosts.length > 0) {
            return writtenPosts.map((post, index) => {
                    return (
                        <Post postInfo={post} key={index} />
                    )
            })
        }
        else {
            return (
                <p className="noPosts">Пока нет публикаций</p>
            )
        }
    };

    const renderLikedPosts = () => {
        const likedPosts = props.posts.filter(post => containsItem(post.likedBy, props.user));

        if (likedPosts.length > 0) {
            return likedPosts.map((post, index) => {
                return (
                    <Post postInfo={post} key={index} />
                )
            })
        }
        else {
            return (
                <p className="noPosts">Пока нет понравившихся постов</p>
            )
        }
    };

    return (
        <div className="MyProfile">
            <SectionHeader headerText="Ваш профиль" />

            <div className="profile-info">
                <i className="fa fa-user-circle" aria-hidden="true" />

                <p className="user-birthDate">
                    Имя: {getCurrentUser().name}
                </p>

                <p className="user-birthDate">
                    Фамилия: {getCurrentUser().surname}
                </p>

                <p className="user-birthDate">
                    Id: {getCurrentUser().id}
                </p>

                <p className="user-birthDate">
                    Дата рождения: {beautifulDate(getCurrentUser().birthDate)}
                </p>

                <p className="user-birthDate">
                    Логин: {getCurrentUser().login}
                </p>

                <p className="user-birthDate">
                    Пароль: {getCurrentUser().password}
                </p>
            </div>

            <div className="yourPostsWrapper">
                <h3>Ваши публикации:</h3>

                <div className="yourPosts">
                    {renderWrittenPosts()}
                </div>
            </div>

            <div className="likedPostsWrapper">
                <h3>Понравившиеся посты:</h3>

                <div className="likedPosts">
                    {renderLikedPosts()}
                </div>
            </div>
        </div>
    )
};

export default MyProfile;

