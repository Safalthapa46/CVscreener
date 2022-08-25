// console.log("this is awasome project.")
const data=[
    {
        name:'prakash',
        age:15,
        city:'dhading',
        language:'newari',
        framework:'java',
        image:'https://randomuser.me/api/portraits/men/51.jpg'

    },

    {
        name:'prabesh',
        age:19,
        language:'nepali',
        city:'butwal',
        framework:'css',
        image:'https://randomuser.me/api/portraits/men/55.jpg'

    },



    {
        age:28,
        name:'prashant',
        city:'tarai',
        language:'madisey',
        framework:'html',
        image:'https://randomuser.me/api/portraits/men/60.jpg'

    },



    {
        age:15,
        name:'hardik',
        city:'india',
        language:'hindi',
        framework:'novel',
        image:'https://randomuser.me/api/portraits/men/61.jpg'

    },
]


function cvIterator(profiles){
    let nextIndex=0;
    return{
        next:function(){
            return nextIndex<profiles.length ?
            {value:profiles[nextIndex++],done:false}:
            {done:true}
        }
    };
}
const candidates=cvIterator(data);

nextCV();


const next=document.getElementById('next');
next.addEventListener("click",nextCV);

function nextCV(){
    const currentCandidate = candidates.next().value;
    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
    if(currentCandidate != undefined){
    image.innerHTML = `<img src='${currentCandidate.image}'>`;
    profile.innerHTML = `<ul class="list-group">
    <li class="list-group-item">Name: ${currentCandidate.name}</li>
    <li class="list-group-item">${currentCandidate.age} years old</li>
    <li class="list-group-item">Lives in ${currentCandidate.city}</li>
    <li class="list-group-item">speaks ${currentCandidate.language}</li>
    <li class="list-group-item">Uses ${currentCandidate.framework} framework</li>
  </ul>`;
    }
    else{
        alert('End of candidate applications');
        window.location.reload();
    }
}