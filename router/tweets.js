import express from "express";

const router = express.Router();

let tweets = [
    {
        id:'1',
        text: '안녕하세요!',
        createdAt: Date.now().toString(),
        name: '김사과',
        username: 'apple',
        url: 'https://www.logoyogo.com/web/wp-content/uploads/edd/2021/02/logoyogo-1-45.jpg'
    }, 
    {
        id:'2',
        text: '반갑습니다!',
        createdAt: Date.now(), 
        name: '반하나',
        username: 'banana',
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJSRyel4MCk8BAbI6gT_j4DBTEIcY0WW4WWfoklymsWA&s'
    }
];


// 해당 아이디에 대한 트윗글 가져오기
// GET
// http://localhost:8080/tweets?username=:username

router.get('/', (req, res) => {
    const username = req.query.username;
    const data = username 
        ? tweets.filter((tweet) => tweet.username == username)
        : tweets;
    res.status(200).json(data);
});

// 글 번호에 대한 트윗 가져오기
// GET
// http://localhost:8080/tweets/:id

router.get('/:id', (req, res, next) => {
    const id =req.params.id;
    const tweet = tweets.find((tweet) => tweet.id === id);
    if(tweet){
        res.status(200).json(tweet);
    }else{
        res.status(200).json({massage: `${id}의 트윗이 없습니다`});
    }
});

// 트윗하기
// POST
// http://localhost:8080/tweets
// name, username, text
// Json형태로 입력 후 추가된 데이터까지 모두 json으로 출력

router.post('/', (req, res, next) => {
    const { text, name, username } = req.body;
    const tweet = {
        id: '10',
        text: TextDecoderStream,
        createAt: Date.now().toString(),
        name: name,
        username: username,
        url: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDAzMTVfMTk3%2FMDAxNzEwNDY2MDA0Mjgw.H7v9RNyIUmk3uyTTEJ35O1lItC5FGfLWskQV5Ae2wGog.uyn5BRwBu1xA0lBECdUhRp92UyKSZC6W0DMZWaQ0Xu8g.JPEG%2FCK_cm26006990%25C5%25A9%25B1%25E2%25BA%25AF%25C8%25AF.jpg&type=sc960_832'
    };
    tweets = [tweet, ...tweets];
    res.status(201).json(tweets);
});

// 트윗 수정하기
// PUT
// http://localhost:8080/tweets/:id
// id, username, text
// json 형태로 입력 후 변경된 데이터까지 모두 json으로 출력

router.put('/:id', (req, res, next) => {
    const id = req.params.id;
    const text = req.body.text;
    const tweet = tweets.find((tweet) => tweet.id === id);
    if(tweet){
        tweet.text = text;
        res.status(201).json(tweet);        
    }else{
        res.status(404).json({message: `${id}의 트윗이 없습니다`})
    }
});

// 트윗 삭제하기
// DELETE
// http// http://localhost:8080/tweets/:id
// 
router.delete('/:id', (req, res, next) => {
    const id = req.params.id;
    tweets = tweets.filter((tweet) => tweet.id == id);
    res.sendStatus(204);
});








// router.get('/:id', (req, res) => {
//     res.status(201).send('GET: /tweets/:id');
// });

// router.post('/', (req, res) => {
//     res.status(201).send('POST: /tweets');
// });

// router.put('/:id', (req, res) => {
//     res.status(201).send('PUT: /tweets/:id 트윗수정');  //username, text
// });

// router.delete('/:id', (req, res) => {
//     res.status(201).send('DELETE: /tweets/:id 트윗삭제');
// });



export default router;