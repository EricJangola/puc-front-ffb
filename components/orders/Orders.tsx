import React, { useCallback, useState } from 'react';
import { TOrder } from "../../api/order.type";
import { TProduct, TProductStatus } from "../../api/product.type";
import Header from "../../components/header/Header";
import styles from './Orders.module.scss';

export type TOrderProps = {
    products: TProduct[],
}

export const Orders: React.FC = ({ products }: TOrderProps) => {

    const [orderList, setOrderList] = useState<TProduct[]>([]);
    const productsList: TProduct[] = products;

    console.log('orderList', orderList);

    const handleClickProductToOrder = useCallback((event: React.MouseEvent) => {
        const itemId = (event.target as HTMLElement).getAttribute('data-id');

        const orderToInsert = productsList.find(item => parseInt(item.id) === parseInt(itemId));
        setOrderList([...orderList, orderToInsert]);
    }, [orderList, productsList]);

    console.log('productsList', productsList);
    return (
        <div className=''>
            <Header>
                <div className={styles.container}>
                    <h1>Pedidos</h1>
                </div>

                <div className="row">
                    {
                        productsList && productsList.map((item, i) => {
                            return (
                                <div key={item.id} className="col-12 col-sm-6">
                                    <div className='card'>
                                        <div className="card-body">
                                            <h5 className="card-title">{item.name}</h5>
                                            <p className="card-text">{item.restaurant}</p>
                                            <a data-id={item.id} onClick={handleClickProductToOrder} className="btn btn-primary">Adicionar</a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

                <div className="row">
                    {
                        orderList && orderList.map((item, i) => {
                            return (
                                <div key={item.id} className="col-12 col-sm-6">
                                    <div className='card'>
                                        <div className="card-body">
                                            {item.name}
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </Header>
        </div>
    );
}