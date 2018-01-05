/**
 * Created by Administrateur on 04/01/2018.
 */
import React from 'react';
import './ProductTableHeader.css';

class ProductTableHeader extends React.Component {
    render(){
        return (
          <th>
              {this.props.column}
              <button className="ProductTableHeader-current">&#x25B2;</button>
              <button>&#x25BC;</button>
          </th>
        );
    }
}

export  default ProductTableHeader;