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
    const [isBusy, setIsBusy] = useState(false);
    const [modalIsOpen, setModalIsOpen]=useState(false);
    const [activeUser, setActiveUser]=useState(0);

    const handlerShowMore = () => {
        setNumberOfPosts(numberOfPosts + 5)
    }

    const handleOpenModal=(userId)=>{
        setActiveUser(userId);
        setModalIsOpen(true);
    }

    const handleCloseModal=()=>{
        setModalIsOpen(false);
    }

    useEffect(async () => {
        setIsBusy(true)
        const posts = await (await fetch('https://jsonplaceholder.typicode.com/posts')).json();
        setPosts(posts)
        const users = await (await fetch(' https://jsonplaceholder.typicode.com/users')).json();
        setUsers(users)
        setIsBusy(false)
    }, [])

    return (
        <div className='wrapper'>

            {isBusy
                ? <LoadingBar className='loading-bar_wrapper' />
                : <div>
                    < CardSection posts={posts} users={users} numberOfCards={numberOfPosts} modalOpen={handleOpenModal} />
                    <Button className='show-button' disabled={false} onClick={handlerShowMore}>Show more</Button>
                    <Modal isOpen={modalIsOpen} user={users[activeUser]} onClose={handleCloseModal} />
                </div>}
                
                
        </div>
    )
};

export default App;
