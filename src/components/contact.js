import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ScrollReveal from 'scrollreveal';
import { srConfig, email } from '../config';
import styled from 'styled-components';
import { theme, mixins, media, Section, Heading } from '../styles';
const { colors, fontSizes, fonts } = theme;

const ContactContainer = styled(Section)`
  text-align: center;
  max-width: 500px;
  
  margin: 10px auto 10px;
`;

/*const RedHeading = styled(Heading)`
  display: block;
  color: ${colors.red};
  font-size: ${fontSizes.xxlarge};
  font-family: ${fonts.Calibre};
  margin-bottom: 20px;
  margin-left: -30px;
  justify-content: right;
  font-size: 56px;
  ${media.desktop`font-size: ${fontSizes.small};`};
  &:before {
    bottom: 0;
    font-size: ${fontSizes.small};
    ${media.desktop`font-size: ${fontSizes.smallish};`};
  }
  &:after {
    display: none;
  }
`;*/
const Title = styled.h4`
  margin: 0 0 20px;
  font-size: 60px;
  color: ${colors.dark};
  ${media.desktop`font-size: 50px;`};
  ${media.tablet`font-size: 40px;`};
`;
const EmailLink = styled.a`
  ${mixins.bigButton};
  margin-top: 50px;
`;

class Contact extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
  };

  componentDidMount() {
    ScrollReveal().reveal(this.contact, srConfig());
  }

  render() {
    const { data } = this.props;
    const { frontmatter, html } = data[0].node;
    const { title } = frontmatter;

    return (
      <ContactContainer id="contact" ref={el => (this.contact = el)}>
        


        <Title>{title}</Title>

        <div dangerouslySetInnerHTML={{ __html: html }} />

        <EmailLink href={`mailto:${email}`} target="_blank" rel="nofollow noopener noreferrer">
          Say Hello!
        </EmailLink>
      </ContactContainer>
    );
  }
}

export default Contact;
