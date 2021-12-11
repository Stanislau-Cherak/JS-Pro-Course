import React, { useState, useEffect } from 'react';
import regeneratorRuntime from "regenerator-runtime";

import Button from '../Button/Button.jsx';
import LoadingBar from '../LoadingBar/LoadingBar.jsx';
import CardSection from '../CardSection/CardSection.jsx';
import Modal from '../Modal/Modal.jsx';

import './App.scss';

const App = () => {

    const [posts, setPosts] = useState([]);
    const [numberOfPosts, setNumberOfPosts] = useState(5);
    const [users, setUsers] = useState([]);
    const [isBusy, setIsBusy] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeUser, setActiveUser] = useState(0);

    const handlerShowMore = () => {
        setNumberOfPosts(numberOfPosts + 5)
    }

    const handleToggleModal = (userId) => {
        if (userId) {
            setActiveUser(userId);
        }
        setIsModalOpen(!isModalOpen);
    }

    useEffect(async () => {

        const usersPromise = fetch(' https://jsonplaceholder.typicode.com/users');
        const postsPromise = fetch('https://jsonplaceholder.typicode.com/posts');

        Promise.all([usersPromise, postsPromise])
            .then(async ([usersData, postsData]) => {
                const users = await usersData.json();
                const posts = await postsData.json();
                setPosts(posts)
                setUsers(users)
                setIsBusy(false)
            });
    }, [])

    return (
        <div className='wrapper'>
            {isBusy
                ? <LoadingBar className='loading-bar_wrapper' />
                : <div>
                    < CardSection posts={posts} users={users} numberOfCards={numberOfPosts} onModalOpen={handleToggleModal} />
                    <Button className='show-button' disabled={false} onClick={handlerShowMore}>Show more</Button>
                    {isModalOpen && <Modal user={users[activeUser]} onClose={handleToggleModal} />}
                </div>}
        </div>
    )
};

export default App;
