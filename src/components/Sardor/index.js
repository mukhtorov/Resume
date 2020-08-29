import React from 'react'
import { Container, Wrapper, Div, DivContainer, Form, Input, LangContainer } from './style'
import Sidebar from './Sidebar'
import Body from './Body'
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contact: "",
      emailTitle: '',
      lang: [
        {
          id: 1,
          lang: "English",
          lev: "Native"
        },
        {
          id: 2,
          lang: "Uzbek",
          lev: "Native"
        },
        {
          id: 3,
          lang: "Kazak",
          lev: "Native"
        }
      ]
    }
  }
  Add = (params) => {
    this.setState({
      lang: this.state.lang.concat({
        id: this.state.lang.length + 1,
        lang: "",
        lev: ''
      })
    })
  }


  onChange = (e, id) => {
    const { target: { value, name } } = e;
    this.setState((state) => {
      const list = state.lang.map((item) => {
        if (item.id == id) {
          if (name === 'lang') {
            item.lang = value
          }
          if (name === 'lev') {
            item.lev = value;
          }
        }
      })
      return {
        list
      }
    }
    )
  }
  render() {
    return (
      <Wrapper>
        <Container>
          <Sidebar data={this.state} />
          <Body />
        </Container>
        {/* FORM */}
        <Form>
          <Input placeholder="Contact" onChange={(e) => this.setState({ contact: e.target.value })} />
          <LangContainer>
            {
              this.state.lang.map((lan, index) => {
                return (
                  <div style={{ display: 'flex' }}>
                    <Input placeholder="Language" name="lang" value={lan.lang} onChange={(e) => this.onChange(e, index + 1)} />
                    <Input placeholder="Level" name="lev" value={lan.lev} onChange={(e) => this.onChange(e, index + 1)} />
                  </div>
                )
              })
            }
            <button onClick={() => this.Add()}>more lang</button>
          </LangContainer>
        </Form>
      </Wrapper>
    )
  }
}

export default App


// import React from 'react'
// import ReactDragListView from 'react-drag-listview';

// class Demo extends React.Component {
//   constructor(props) {
//     super(props);

//     const data = [];
//     for (let i = 1, len = 7; i < len; i++) {
//       data.push({
//         title: `rows${i}`
//       });
//     }

//     this.state = {
//       data
//     };
//   }

//   render() {
//     const that = this;
//     const dragProps = {
//       onDragEnd(fromIndex, toIndex) {
//         const data = [...that.state.data];
//         const item = data.splice(fromIndex, 1)[0];
//         data.splice(toIndex, 0, item);
//         that.setState({ data });
//       },
//       nodeSelector: 'li',
//       handleSelector: 'Div'
//     };

//     return (
//       <ReactDragListView {...dragProps}>
//         {this.state.data.map((item, index) => (
//           <li key={index} style={{ listStyleType: 'none' }}>
//             <Div>
//               {item.title}
//             </Div>
//           </li>
//         ))}
//       </ReactDragListView>
//     );
//   }
// }


// export default Demo


