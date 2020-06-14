(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{20:function(e,t,o){},41:function(e,t,o){e.exports=o(55)},46:function(e,t,o){},55:function(e,t,o){"use strict";o.r(t);var a=o(0),n=o.n(a),c=o(10),l=o.n(c),r=(o(46),o(38)),d=o(9),i=o(14);var s={todoTask:{id:null,completed:!1,text:""},todos:[]};var u=Object(i.b)({combinedTodos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"HANDLE_INPUT_TODO":return Object(d.a)({},e,{todoTask:Object(d.a)({},e.todoTask,{id:e.todos.length+1,text:t.payload})});case"ADD_TODOS":return Object(d.a)({},e,{todoTask:Object(d.a)({},e.todoTask,{text:""}),todos:[].concat(Object(r.a)(e.todos),[t.payload])});case"TOGGLE_TODO":var o=e.todos.map((function(e){return e.id===t.payload?Object(d.a)({},e,{completed:!e.completed}):e}));return Object(d.a)({},e,{todos:o});case"REMOVE_TODO":var a=e.todos.filter((function(e){return e.id!==t.payload}));return Object(d.a)({},e,{todos:a});case"REMOVE_COMPLETED_TODO":var n=e.todos.filter((function(e){return!e.completed}));return Object(d.a)({},e,{todos:n});default:return e}}}),m=Object(i.c)(u);m.subscribe((function(){return console.log(m.getState())}));var p=m,f=o(23),E=o(39),v=o(34),T=o(37),O=o(70),b=o(36),h=o.n(b),D=o(35),k=o.n(D);o(20);var g=function(e){var t=e.todo,o=e.handleState,a=e.handleRemove,c=new Date;return n.a.createElement("div",{className:"todo-container"},n.a.createElement("div",{className:"todo-item"},n.a.createElement(O.a,{className:"check-box",icon:n.a.createElement(k.a,{fontSize:"small"}),checkedIcon:n.a.createElement(h.a,{fontSize:"small"}),name:"checkedI",type:"checkbox",checked:t.completed,onChange:function(){return o(t.id)}}),n.a.createElement("div",{className:"todo-row-left"},n.a.createElement("p",{className:"todo-title",style:t.completed?{color:"#cdcdcd",fontStyle:"italic",textDecoration:"line-through"}:null},t.text),n.a.createElement("p",{className:"todo-date"},function(e){var t=new Date(e).getFullYear(),o=new Date(e).toLocaleString("default",{month:"long"}),a=new Date(e).getDate(),n=c.getHours()+":"+c.getMinutes();return"".concat(o," ").concat(a," - ").concat(t," - ").concat(n)}(c)))),n.a.createElement("div",{className:"todo-bin"},n.a.createElement(v.a,{icon:T.a,onClick:function(){return a(t.id)}})))};var C=function(e){var t=e.todos,o=e.handleRemove,a=e.handleState;return n.a.createElement("div",null,t.map((function(e){return n.a.createElement(g,{key:e.id,todo:e,handleState:a,handleRemove:o})})))};var y=function(e){var t=e.todos,o=e.activeTodoCount,a=e.setFilter,c=e.completedTodosCount,l=e.removeCompletedItem;return n.a.createElement("div",null,t.length>0&&n.a.createElement("div",{className:"box-shadow"},n.a.createElement("div",{className:"filter-left-row"},n.a.createElement("span",{className:"items-count"},"".concat(o,1===o?" item remain":" items remain")),n.a.createElement("div",{className:"filter-buttons"},n.a.createElement("button",{onClick:function(){return a("")}},"All"),n.a.createElement("button",{onClick:function(){return a("completed")}},"Completed"),n.a.createElement("button",{onClick:function(){return a("active")}},"Active"))),c>0&&n.a.createElement("div",{className:"clear-button"},n.a.createElement("button",{onClick:l},"Clear Completed Tasks"))))};var N={addTodos:function(e){return{type:"ADD_TODOS",payload:e}},toggleTodo:function(e){return{type:"TOGGLE_TODO",payload:e}},removeTodo:function(e){return{type:"REMOVE_TODO",payload:e}},removeCompletedTodo:function(){return{type:"REMOVE_COMPLETED_TODO"}},handleInputTodo:function(e){return{type:"HANDLE_INPUT_TODO",payload:e}}},S=Object(f.b)((function(e){return{todos:e.combinedTodos.todos,todoTask:e.combinedTodos.todoTask}}),N)((function(e){var t=Object(a.useState)(""),o=Object(E.a)(t,2),c=o[0],l=o[1],r=Object(a.useRef)(null);function d(t){e.removeTodo(t)}function i(t){e.toggleTodo(t)}var s=e.todos.filter((function(e){return!e.completed})).length,u=e.todos.filter((function(e){return e.completed})).length;return n.a.createElement("div",null,n.a.createElement("h1",null,"Todos"),n.a.createElement("form",{className:"todo-list",onSubmit:function(t){t.preventDefault(),""!==e.todoTask.text.trim()&&(e.addTodos(e.todoTask),r.current.focus())}},n.a.createElement("div",{className:"input-box"},n.a.createElement("input",{className:"input-editor",ref:r,type:"text",id:"todo-list",name:"todo-list",value:e.todoTask.text,onChange:function(t){var o=t.target.value;e.handleInputTodo(o)},placeholder:"What needs to be done?",autocomplete:"off"})),""===c&&n.a.createElement(C,{todos:e.todos,handleState:i,handleRemove:d}),"completed"===c&&n.a.createElement(C,{todos:e.todos.filter((function(e){return e.completed})),handleState:i,handleRemove:d}),"active"===c&&n.a.createElement(C,{todos:e.todos.filter((function(e){return!e.completed})),handleState:i,handleRemove:d}),n.a.createElement(y,{todos:e.todos,activeTodoCount:s,setFilter:l,completedTodosCount:u,removeCompletedItem:function(){e.removeCompletedTodo()}})),n.a.createElement("div",{className:"footer-section"},n.a.createElement("p",null,"Double-click to edit a todo"),n.a.createElement("p",null,"Created by Arshad2020"),n.a.createElement("p",null,"Part of TodoMVC")))}));l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(f.a,{store:p},n.a.createElement(S,null))),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.bab4d30d.chunk.js.map