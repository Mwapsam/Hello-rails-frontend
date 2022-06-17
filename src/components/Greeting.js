import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import getHello from '../services/hello.service';

const Greeting = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getHello());
    }, [dispatch]);

    const hello = useSelector(state => state.hello);
    const res = Object.keys(hello).map(key => hello[key]);


  return (
    <div>
        {res.map(item => <div key={uuidv4()}>{item.texts}</div>)}
    </div>
  )
}

export default Greeting