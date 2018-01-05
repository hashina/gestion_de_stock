/**
 * Created by Administrateur on 03/01/2018.
 */
import React from 'react';

const RESET_VALUES = {id: '', category: '', price: '', stocked: false, name: ''};

class ProductForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.state = {
            product: Object.assign({}, RESET_VALUES),
            nameIsEmpty: true,
            errors: {}
        };
    }

    handleChange(e) {
        if (e.target.name === 'name') {
            if (e.target.value.length > 0) {
                this.state.nameIsEmpty = false;
            } else {
                this.state.nameIsEmpty = true;
            }
        }
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState((prevState) => {
            prevState.product[name] = value;
            return {product: prevState.product};
        })
    }

    handleKeyUp(e) {
        console.log('key up');
    }

    handleSave(e) {
        if (this.state.product) {
            e.preventDefault();
            return;
        }
        this.props.onSave(this.state.product);
        this.setState({
            product: Object.assign({}, RESET_VALUES)
        });
        e.preventDefault();
    }

    render() {
        return (
            <form>
                <h3>Enter a new product</h3>
                <p>
                    <label>
                        Name
                        <br />
                        <span
                            style={{color: 'red'}}>{this.state.nameIsEmpty ? "Ce champ ne doit pas être vide !" : ""}</span>
                        <input type="text" name="name" value={this.state.product.name} onChange={this.handleChange}/>
                    </label>
                </p>
                <p>
                    <label>
                        Category
                        <br />
                        <input type="text" name="category" value={this.state.product.category}
                               onChange={this.handleChange}/>
                    </label>
                </p>
                <p>
                    <label>
                        Price
                        <br />
                        <input type="text" name="price" value={this.state.product.price} onChange={this.handleChange}/>
                    </label>
                </p>
                <p>
                    <label>
                        <input type="checkbox" name="stocked" checked={this.state.product.stocked}
                               onChange={this.handleChange}/>
                        &nbsp;In stock?
                    </label>
                </p>
                <button onClick={this.handleSave}>Save</button>
            </form>
        );
    }
}

export default ProductForm;


