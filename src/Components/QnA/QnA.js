import React from 'react';
import './QnA.css'

const QnA = () => {
    return (
        <div>
            <h4 className='text-center mt-3'><u>Question and Answers</u></h4>
            <div className="QnA-div py-5">
                <div className='qna card shadow m-3 p-3'>
                    <h5>How React works?</h5>
                    <p><u>Answer :</u>React একটি জাভাস্ক্রিপ্ট লাইব্রেরী, যা দ্বারা ইউজার ইন্টারফেস বানানো যায়। React মূলত Render, Virtual Dom ব্যবহার করে diff algorith এর মাধ্যমে কাজ করে। React সবসময় আমাদের কোডগুলো Virtual Dom - এ কপি করে রাখে। পরবর্তীতে আমরা কোন কোড পরিবর্তন
                        করলে diff algorith এর দ্বারা শুধু আমরা যেটুকু পরিবর্তন করেছি সেটুকুই Re-Render করে। এভাবেই
                        React কাজ করে</p>
                </div>
                <div className='qna card shadow m-3 p-3'>
                    <h5>State vs Props.</h5>
                    <p><u>Answer :</u>props দিয়ে ডাটা গ্রহণ করা যায়, এবং state দিয়ে ডাটা পাঠানো যায়। কলব্যাক ফাংশনগুলি প্রপ হিসাবে পাস করা যায়, এবং state সেই ফাংশনগুলি তৈরি করে। props মূলত অপরিবর্তনীয় তবে children-props পরিবর্তন হতে পারে, state ব্যবহারকারীদের ইভেন্টের মাধ্যমে পরিবর্তন হতে পারে। state data বহন করার জন্য ব্যবহার করা হয়</p>
                </div>
                <div className='qna card shadow m-3 p-3'>
                    <h5>How useState works?</h5>
                    <p><u>Answer :</u>useState হল একটি হুক (ফাংশন)। useState একটি ফাংশন এবং একটি ভেরিয়েবল প্রদান করে। useState পরিবর্তনীয় ব্যবহারকারী ইচ্ছা অনুযায়ী Browser dom-এ পরিবর্তন হতে পারে।</p>
                </div>
            </div>
        </div>
    );
};

export default QnA;