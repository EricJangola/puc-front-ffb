import React, { useCallback, useMemo, useState } from 'react';
import { uuidv4 } from '@firebase/util';
import { addDoc, collection } from 'firebase/firestore';
import { TOrder, TOrderPlace } from '../../api/order.type';
import { TProduct } from "../../api/product.type";
import { database } from './../../firebaseConfig';

import Header from "../header/Header";
import styles from './Backoffice.module.scss';

export type TOrderProps = {
    products: TProduct[],
}

const dbInstance = collection(database, 'orders');

export const Backoffice: React.FC = () => {

    const [orderList, setOrderList] = useState<TProduct[]>([]);
    const handleClickProductDone = useCallback(() => {

    }, []);

    const returnRenderNoItem = () => {
        return (
            <div className="alert alert-warning" role="alert">
                This is a warning alert—check it out!
            </div>
        )
    }

    return (
        <div className=''>
            <Header>
                <div className={styles.container}>
                    <h1>Backoffice</h1>
                </div>

                <div className="row">
                    <div className='col-sm-12'>
                        <div className="row">
                            {
                                orderList && orderList.map((item, i) => {
                                    return (
                                        <div key={item.id} className="col-12 col-sm-6">
                                            <div className='card'>
                                                <div className="card-body">
                                                    <h5 className="card-title">{item.name}</h5>
                                                    <p className="card-text">{item.restaurant}</p>
                                                    <button data-id={item.id} onClick={handleClickProductDone} className="btn btn-primary">Adicionar</button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            {
                                orderList.length === 0 && <div className="col-12" role="alert">
                                    <div className="alert alert-warning" role="alert">Sem pedidos</div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </Header>
        </div>
    );
}
