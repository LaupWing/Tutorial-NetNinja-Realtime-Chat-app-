# ninja-chat

> A Vue.js project

A Tutorial by the net ninja from udemy.

Link [Tutorial Link](https://www.udemy.com/build-web-apps-with-vuejs-firebase/)

What have i learned from this project?
*   You can send props when redirecting the user to another page
```javascript
// ROUTER FILE
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/chat',
      name: 'Chat',
      component: Chat,
      props: true, // <---- define it can use props
    }
  ]
})
```
```javascript
// CHAT FILE
this.$router.push({name: 'Chat', params: {name:this.name}}) // <---- as you can see instead of sending it as a prop its called params
```
*   Realtime Data loading
```javascript
let ref = db.collection('messages').orderBy('timestamp') //<---- save the refrenence and than order by timestamp

ref.onSnapshot(snapshot =>{ //<---- event started when data is updated
    snapshot.docChanges().forEach(change=>{ // <---- check for the change in this collection
        if(change.type === 'added'){ // <--- check the type of the data
            let doc = change.doc
            this.messages.push({
                id: doc.id,
                name: doc.data().name,
                content: doc.data().content,
                timestamp: moment(doc.data().timestamp).format('lll')
            })
        }
    })
})
```