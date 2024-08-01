import React from 'react'

const skillText = [
  {
    title:"꿈을 설계하고 디자인하다.",
    desc:"나는 공간을 만드는 것을 좋아합니다.어렸을때부터 나만의 공간을 만드는 것을 좋아했고 나만의 다락방을 좋아했습니다.단 한사람이라도 내가 만든 공간 속에서 영감을 받거나 마음이 움직였다면 좋겠습니다.나만의 공간을 마음껏 만들 수 있다는건 구현(코딩)에엄청난 매력인것 같습니다.그 한국에서 나만의 꿈을 설계하고, 개발을 하며 앞으로 살아가고 싶습니다.",
  },{
    title:"열심히 할수록 기회는 따른다.",
    desc:"운이 좋은 사람은 없다고 생각합니다. 단지 운을 만들 뿐이라고.운을 만들기 위해서는 내가 좋아하는 일이나 내가 하고 싶은 일에 몰두하면 됩니다.몰두 하다보면 길이 보이고 방향이 보이게 됩니다.운이란 고된 노동과 노력을 통해 스스로 만들어 내는 것이라 생각합니다.",
  },{
    title:"나에게 정직하다.",
    desc:"정직은 다른 사람보다 나에게 큰 의미를 부여한다.자신이 정직하지 않다면 진정으로 원하는 일을 열정적으로 밀고 나갈 수가 없다.마음에서 우러나오는 일을 해야 정직해지며 삶을 더 즐길 줄 알게된다.",
  }
]

const Skill = () => {
  return (
    <section id='skill'>
      <div className="skill_inner">
        <div className="skill_title">
          Challenge <em>나의도전</em>
        </div>
        <div className="skill_desc">
          {
            skillText.map((skill,key)=>(
              <div key={key}>
                <span>{key+1}.</span>
                <h3>{skill.title}</h3>
                <p>{skill.desc}</p>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Skill
