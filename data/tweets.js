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

// 모든 트윗을 리턴
export async function getAll() {

}

// 해당 아이디에 대한 트윗을 리턴
export async function getAllByUsername(username){

}

// 글번호에 대한 트윗을 리턴
export async function getByID(id){

}

// 트윗을 작성
export async function create(text, name, username){

}

// 트윗을 변경
export async function update(id, text){

}

// 트윗을 삭제
export async function remove(id){

}