import React from 'react';
import styled from 'styled-components';
import Draggable from '../Draggable';
import Droppable from '../Droppable';

const Wrapper = styled.div`
	width: 100%;
	padding: 32px;
	display: flex;
	justify-content: center;
`;

const Item = styled.div`
	padding: 8px;
	color: #555;
	background-color: white;
	border-radius: 3px;
`;

const droppableStyle = {
	backgroundColor: `#555`,
	width: '200px',
	height: '150px',
	margin: '32px',
	'borderRadius': '5px',
	'box-shadow': '0px 8px 16px 0px rgba(0, 0, 0, 0.2)'
};


export default class DndTest extends React.Component {
	render(){
	// console.log('in drag n drop test: ', this.props)

		return (
			<Wrapper>
				<Droppable client={this.props.client} dropOnChange={this.props.dropOnChange} id='dr1' style={droppableStyle}><h3><font color='white'> OnBoarding</font></h3>
				{this.props.status === 'OnBoarding' ? <Draggable id='item1' style={{margin: '8px'}}><Item>Current Stage</Item></Draggable> : null  }
				</Droppable>

				<Droppable client={this.props.client} dropOnChange={this.props.dropOnChange} id='dr2' style={droppableStyle}><h3><font color='white'> Showings</font></h3>
				{this.props.status === 'Showings' ? <Draggable id='item1' style={{margin: '8px'}}><Item>Current Stage</Item></Draggable> : null  }
				</Droppable>

				<Droppable client={this.props.client} dropOnChange={this.props.dropOnChange} id='dr3' style={droppableStyle}><h3><font color='white'> Negotiations</font></h3>
				{this.props.status === 'Negotiations' ? <Draggable id='item1' style={{margin: '8px'}}><Item>Current Stage</Item></Draggable> : null  }

				</Droppable>

				<Droppable client={this.props.client} dropOnChange={this.props.dropOnChange} id='dr4' style={droppableStyle}><h3><font color='white'> Accepted Offer</font></h3>
				{this.props.status === 'Accepted Offer' ? <Draggable id='item1' style={{margin: '8px'}}><Item>Current Stage</Item></Draggable> : null  }
			
				</Droppable>

				<Droppable client={this.props.client} dropOnChange={this.props.dropOnChange} id='dr5' style={droppableStyle}><h3><font color='white'> Contract Negotiations</font></h3>
				{this.props.status === 'Contract Negotiations' ? <Draggable id='item1' style={{margin: '8px'}}><Item>Current Stage</Item></Draggable> : null  }

				</Droppable>


				<Droppable client={this.props.client} dropOnChange={this.props.dropOnChange} id='dr6' style={droppableStyle}><h3><font color='white'> Signed Contract</font></h3>
				{this.props.status === 'Signed Contract' ? <Draggable id='item1' style={{margin: '8px'}}><Item>Current Stage</Item></Draggable> : null  }

				</Droppable>

				<Droppable client={this.props.client} dropOnChange={this.props.dropOnChange} id='dr7' style={droppableStyle}><h3><font color='white'> Board Package</font></h3>
				{this.props.status === 'Board Package' ? <Draggable id='item1' style={{margin: '8px'}}><Item>Current Stage</Item></Draggable> : null  }

				</Droppable>

				<Droppable client={this.props.client} dropOnChange={this.props.dropOnChange} id='dr8' style={droppableStyle}><h3><font color='white'> Closing!</font></h3>
				{this.props.status === 'Closing' ? <Draggable id='item1' style={{margin: '8px'}}><Item>Current Stage</Item></Draggable> : null  }

				</Droppable>

			

			</Wrapper>
			);
	}

}