/**
 * Created by Administrateur on 03/01/2018.
 */
import React from 'react';
import SortableColumnHeader from './SortableColumnHeader'
import ProductRow from './ProductRow';

class ProductTable extends React.Component {
    constructor(props) {
        super(props);
        this.handleDestroy = this.handleDestroy.bind(this);
        this.sortByKeyAndOrder = this.sortByKeyAndOrder.bind(this);
        this.handleSort = this.handleSort.bind(this);
        this.state = {
            sort: {
                column: 'name',
                direction: 'desc'
            }
        }
    }

    handleDestroy(id) {
        this.props.onDestroy(id);
    }

    handleSort(column, direction) {
        this.setState({
            sort: {
                column: column,
                direction: direction
            }
        })
    }

    sortByKeyAndOrder(objectA, objectB) {
        let isDesc = this.state.sort.direction === 'desc' ? 1 : -1;
        let [a, b] = [objectA[this.state.sort.column], objectB[this.state.sort.column]];
        if (this.state.sort.column === 'price') {
            [a, b] = [a, b].map((value) => parseFloat(value.replace(/[^\d\.]/g, ''), 10))
        }
        if (a > b) {
            return 1 * isDesc;
        }
        if (a < b) {
            return -1 * isDesc;
        }
        return 0;
    }

    sortProducts() {
        let productsAsArray = Object.keys(this.props.products).map((pid) => this.props.products[pid]);
        return productsAsArray.sort(this.sortByKeyAndOrder);
    }

    render() {
        let rows = [];
        this.sortProducts().forEach((product) => {
            if (product.name.indexOf(this.props.filterText) === -1 || (!product.stocked && this.props.inStockOnly)) {
                return;
            }
            rows.push(<ProductRow product={product} key={product.id}
                                  onDestroy={this.handleDestroy}></ProductRow>);
        });
        return (
            <div>
                <table>
                    <thead>
                    <tr>
                        <SortableColumnHeader currentSort={this.state.sort} column="name"
                                              onSort={this.handleSort}></SortableColumnHeader>
                        <SortableColumnHeader currentSort={this.state.sort} column="price"
                                              onSort={this.handleSort}></SortableColumnHeader>
                    </tr>
                    </thead>
                    <tbody>{rows}</tbody>
                </table>
            </div>
        );
    }
}

export default ProductTable;