import React from 'react'
import { Col, Image, Row } from 'react-bootstrap'
import profilephoto from "../Profile/profilephoto.jpg"

const ProfilePhoto = () => {
    return (
        <div>
  <Row>
  <Col xs={12} md={100}>
      <Image className="img" src={profilephoto} roundedCircle  />
    </Col>
  </Row>
        </div>
    )
}

export default ProfilePhoto
