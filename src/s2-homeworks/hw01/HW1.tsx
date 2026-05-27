import React from 'react'
import Message from './message/Message'
import MessageSender from './message-sender/MessageSender'
import s2 from '../../s1-main/App.module.css'
import FriendMessage from './friend-message/FriendMessage'
import avatar from './avatar.png'

/*
* 1 - описать тип MessageType
* 2 - описать тип MessagePropsType в файле Message.tsx
* 3 - в файле Message.tsx отобразить приходящие данные
* 4 - выполнить пункты 2, 3 в файле FriendMessage.tsx
* 5 - сделать стили в соответствии с дизайном
* */

// нужно создать правильный тип вместо any
export type MessageType = {
    id:number
    user:{
        name:string,
        avatar:string
    }
    message:{
        text:string
        time:string
    }
}

// структуру объекта не менять
export const message0: MessageType = {
    id: 0,
    user: {
        avatar: avatar, // можно менять
        name: 'Some Name',  // можно менять
    },
    message: {
        text: 'some textsome textsome textsome textsome textsome textsome text', // можно менять
        time: '22:00', // можно менять
    },
}
export const friendMessage0: MessageType = {
    id: 100,
    user: {
        avatar: avatar, // можно менять
        name: 'Friend Name', // можно менять
    },
    message: {
        text: 'зеркальное сообщение для тренировки css', // можно менять
        time: '22:00', // можно менять
    },
}

const HW1 = () => {
    return (
        <div id={'hw1'}>
            <div className={s2.hwTitle}>Homework #1</div>
            <div className={s2.hw}>
                {/*проверка отображения (не менять)*/}
                <div>
                    <Message message={message0} />
                    <FriendMessage message={friendMessage0} />
                </div>

                {/*для автоматической проверки дз (не менять)*/}
                <MessageSender M={Message} />
            </div>
        </div>
    )
}

export default HW1


// Что нужно написать вместо XXX, чтобы кнопка отправки комментария отрабатывала верно:

// первоначально кнопка должна быть в состоянии disable, а после успешного выполнения условия (комментарий должен быть больше 5 символов) должна раздизаблиться.
// ❗ Ответ необходимо дать на основании данных (переменных), которые уже есть в коде



// import { ChangeEvent, useState } from "react"
// import { createRoot } from "react-dom/client"
// const MIN_COMMENT_SIZE = 5
// const LongCommentChecker = () => {
//   const [comment, setComment] = useState<string>("")
//   const isCommentReady = comment.length > MIN_COMMENT_SIZE
//   const setCommentHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
//     const newComment = e.currentTarget.value
//     setComment(newComment)
//   }
//   const clearCommentsHandler = () => {
//     if (isCommentReady) {
//       setComment("")
//     }
//   }
//   return (
//     <main>
//       <textarea
//         placeholder={"Your comment must have more than 5 charters"}
//         value={comment}
//         onChange={setCommentHandler}
//       />
//       <div>
//         <button disabled={XXX} onClick={clearCommentsHandler}>
//           Send comment
//         </button>
//       </div>
//     </main>
//   )
// }
// createRoot(document.getElementById("root")!).render(<LongCommentChecker />)



// Какое значение будет выведено в консоль?

// const student = {
//   name: "Leonid",
//   age: 64,
//   friends: ["Masha", "Igor", "Yana"]
// }
// export const updatedStudent = {...student}
// updatedStudent.friends.push("Liza")
// console.log(student.friends[3])



// Какое значение получит переменная "myFriendName"?

// const student = {
//   name: "Vladimir",
// }
// const newStudent = student
// const myFriend = {
//   ...newStudent,
// }
// const newUser = {
//   name: "Lev",
// }
// export const myFriendName = student.name !== myFriend.name ? newUser.name : student.name
// // Какое значение получит переменная "myFriendName"?


// Что надо написать вместо XXX, чтобы при клике кнопка становилась красной?

// import { useState } from "react"
// import { createRoot } from "react-dom/client"
// const ColorButton = () => {
//   const [isColored, setIsColored] = useState<boolean>(false)
//   return (
//     <button style={{ backgroundColor: `${XXX === true ? "red" : ""}` }} onClick={() => setIsColored(true)}>
//       Меняю цвет по клику
//     </button>
//   )
// }
// createRoot(document.getElementById("root")!).render(<ColorButton />)




// Те пользователи, у которых в стэке пять и более технологий, должны в списке быть отмечены, как готовые к работе. Что надо вставить вместо XXX, чтобы код работал, как необходимо?

// import { useState } from "react"
// import { createRoot } from "react-dom/client"
// type User = {
//   id: number
//   name: string
//   personalData: PersonalData
// }
// type PersonalData = {
//   gender: string
//   age: number
//   technologies: Technologies[]
// }
// type Technologies = "HTML" | "CSS" | "React" | "JS/TS" | "Redux"
// const UsersList = () => {
//   const [users] = useState<User[]>([
//     {
//       id: 1,
//       name: "Bob",
//       personalData: {
//         gender: "male",
//         age: 23,
//         technologies: ["HTML", "CSS", "React", "JS/TS", "Redux"],
//       },
//     },
//     {
//       id: 2,
//       name: "Alex",
//       personalData: {
//         gender: "male",
//         age: 21,
//         technologies: ["HTML", "CSS", "React"],
//       },
//     },
//     {
//       id: 3,
//       name: "Ann",
//       personalData: {
//         gender: "female",
//         age: 26,
//         technologies: ["HTML", "CSS", "JS/TS"],
//       },
//     },
//     {
//       id: 4,
//       name: "Helen",
//       personalData: {
//         gender: "female",
//         age: 31,
//         technologies: ["HTML", "CSS"],
//       },
//     },
//     {
//       id: 5,
//       name: "Donald",
//       personalData: {
//         gender: "male",
//         age: 28,
//         technologies: ["React", "JS/TS", "Redux"],
//       },
//     },
//   ])
//   return (
//     <ul>
//       {users.map((u) => {
//         return u.XXX.length >= 5 ? (
//           <li key={u.id}>{`User ${u.name}. ${u.personalData.age}. Ready to work.`}</li>
//         ) : (
//           <li key={u.id}>{`User ${u.name}. ${u.personalData.age}. `}</li>
//         )
//       })}
//     </ul>
//   )
// }
// createRoot(document.getElementById("root")!).render(<UsersList />)


// Что надо вставить вместо XXX, чтобы код работал нормально?

// import { useState } from "react"
// import { createRoot } from "react-dom/client"
// const PasswordChecker = () => {
//   const [password, setPassword] = useState<string>("")
//   return (
//     <main>
//       <p>Your password must have more than 8 charters!</p>
//       <input
//         placeholder={"Enter your password"}
//         value={password}
//         onChange={(e) => setPassword(e.currentTarget.value)}
//         type={"password"}
//       />
//       {XXX < 9 && <p style={{ color: "red" }}>The password is too short!</p>}
//     </main>
//   )
// }
// createRoot(document.getElementById("root")!).render(<PasswordChecker />)



// Чему равно copyUser.name после выполнения этого кода?

// const user = {
//   name: "Katya",
//   age: 18
// }
// export const copyUser = {...user}
// user.name = "Konstantin"


// Чему равно значение copyStudent.age после выполнения этого кода?

// const student = {
//     name: "Nikita",
//     age: 82
// }
// export const copyStudent = student
 
// student.age = 16
