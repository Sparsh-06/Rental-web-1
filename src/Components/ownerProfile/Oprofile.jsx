import React from 'react'
import { Container, Grid, GridItem, Image, Input, Button, InputLeftAddon, InputGroup, Text } from '@chakra-ui/react'
import '../Styles/owner.css';
import { useState } from 'react';

const Oprofile = () => {

  const [selectedImage, setSelectedImage] = useState(null);

  // Handle file input change
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Process or display the selected image here
      setSelectedImage(file);
    }
  };

  return (
    <div>
      <div className="profile-section">
        <div className="profile-picture">
          <Input type='file'/>
        </div>
        <div className="profile-form">
          <div className="name-fields">
            <Input type="text" id="first-name" placeholder="First Name" />
            <Input type="text" id="last-name" placeholder="Last Name" />
          </div>
          <InputGroup className='grp'>
            <InputLeftAddon children='+91' />
            <Input type="tel" id="phone-number" placeholder="Phone Number" />
          </InputGroup>
          <InputGroup className='grp'>
            <InputLeftAddon children='@.com' />
            <Input type="email" id="email" placeholder="Email" />
          </InputGroup>
          <InputGroup className='grp'>
            <InputLeftAddon children='@.com' />
            <Input type="email" id="location" placeholder="Location" />
          </InputGroup>
          <Button size={'sm'} type="submit" mt={'20px'}>Submit</Button>
        </div>
      </div>
    </div>
  )
}

export default Oprofile
