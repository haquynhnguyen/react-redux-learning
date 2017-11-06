//VisibilityToggle - render, constructor, handleToggleVisibility
// visibility -> false

// let visibility = false;
// const toggleVisibility = () => {
//     visibility = !visibility;
//     render();
// }

// const render = () => {
//     const jsx = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={toggleVisibility}>{visibility ? 'Hide Details' : 'Show Details'}</button>
//             {visibility && <div>
//                 <p>Hey! There are some detail you can see.</p>
//             </div>}
//         </div>
//     );

//     ReactDOM.render(jsx, document.getElementById('app'));
// }

// render();

class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        }
    }

    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        });
    }

    render() {
        return(
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.visibility ? 'Hide Details' : 'Show Details'}</button>
                {
                    this.state.visibility && <p>Hey! There are some detail you can see.</p>
                }
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));