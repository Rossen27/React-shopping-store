import React, { useContext, useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { Store } from '../Store';
import CheckoutSteps from '../components/CheckoutSteps';

export default function ShippingAddressScreen() {
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    fullBox,
    userInfo,
    cart: { shippingAddress },
  } = state;
  const [fullName, setFullName] = useState(shippingAddress.fullName || '');
  const [address, setAddress] = useState(shippingAddress.address || '');
  const [city, setCity] = useState(shippingAddress.city || '');
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode || '');
  useEffect(() => {
    if (!userInfo) {
      navigate('/signin?redirect=/shipping');
    }
  }, [userInfo, navigate]);
  const [country, setCountry] = useState(shippingAddress.country || '');
  const submitHandler = (e) => {
      e.preventDefault();
      ctxDispatch({
        type: 'SAVE_SHIPPING_ADDRESS',
        payload: {
          fullName,
          address,
          city,
          postalCode,
          country,
          location: shippingAddress.location,
        },
      });
      localStorage.setItem(
        'shippingAddress',
        JSON.stringify({
          fullName,
          address,
          city,
          postalCode,
          country,
          location: shippingAddress.location,
        })
      );
      navigate('/payment');
    };

    useEffect(() => {
      ctxDispatch({ type: 'SET_FULLBOX_OFF' });
    }, [ctxDispatch, fullBox]);
  return <div>
      <Helmet>
        <title> 收 件 地 址 </title>
      </Helmet>
      <CheckoutSteps step1 step2></CheckoutSteps>
      <div className='container small-container'>
      <h1 className='my-3'> 收 件 地 址 </h1>
      <Form onSubmit={submitHandler}>
      <Form.Group className='mb-3' controlId='fullName'>
        <Form.Label>姓名</Form.Label>
        <Form.Control 
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        required
        />
        </Form.Group>
        <Form.Group className='mb-3' controlId='address'>
          <Form.Label>地址</Form.Label>
          <Form.Control
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='city'>
        <Form.Label>城市</Form.Label>
          <Form.Control
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='postalCode'>
        <Form.Label>郵遞區號</Form.Label>
          <Form.Control
          value={postalCode}
          onChange={(e) => setPostalCode(e.target.value)}
          required
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='country'>
        <Form.Label>國家</Form.Label>
          <Form.Control
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          required
          />
        </Form.Group>
        <div className='mb-3'>
          <Button
            id="chooseOnMap"
            type="button"
            variant='outline-secondary'
            onClick={() => navigate('/map')}
          >
            選擇居住位置
          </Button>
          {shippingAddress.location && shippingAddress.location.lat ? (
            <div>
              緯度 : {shippingAddress.location.lat}
              經度 : {shippingAddress.location.lng}
            </div>
          ) : (
            <div>查 無 此 地 </div>
          )}
        </div>
        <div className='mb-3'>
          <Button type='submit' variant="outline-secondary"> 結 帳 </Button>
        </div>
      </Form>
      </div>

    </div>;
}
