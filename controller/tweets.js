import * as tweetRepository from '../data/tweets.js';

// 모든 트윗을 가져오는 함수
export async function getTweets(req, res){
    const username = req.query.username;
    const data = await (username ? tweetRepository.getAllByUsername(username)
                                 : tweetRepository.getAll());        
    res.status(200).json(data);
}

// 하나의 트윗을 가져오는 함수
export async function getTweet(req, res, next) {

}

// 트윗을 생성하는 함수
export async function createTweet(req, res, next) {

}

// 트윗을 변경하는 함수
export async function updateTweet(req, res, next) {

}

// 트윗을 삭제하는 함수
export async function deleteTweet(req, res, next) {
    
}