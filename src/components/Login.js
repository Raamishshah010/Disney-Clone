    import styled from 'styled-components';

    const Login = (props) => {
        return (

            <Container>
                <Content>
                    <CTA>
                        <CTALogoOne src="/images/cta-logo-one.svg" alt="" />

                        <SignUp>Get All There</SignUp>
                        <Description>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                            numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                            optio, eaque rerum! Provident similique accusantium nemo autem.
                        </Description>

                        <CTALogo2 src="/images/cta-logo-two.png"></CTALogo2>
                    </CTA>
                    <BgImage />
                </Content>
            </Container>
        )
    };

    const Container = styled.section`
    overflow: hidden;
    display:flex;
    flex-direction: column;
    text-align: center;
    height: 100vh;
    `;

    const Content = styled.div`
    transform: translateY(-120px)
    margin-bottom: 10vw;
    width: 100%;
    position: relative;
    min-hight: 100vh;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 80px 40px;
    height: 100%; 

    `;

    const BgImage = styled.div`
    height: 100vh;
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;

    background-image: url('/images/login-background.jpg');

    position: absolute;
    top: 0;
    right:0;
    left: 0;
    z-index: -1;

    `;

    const CTA = styled.div`
    margin-bottom: 2vw;
    max-width: 650px;
    flex-wrap: wrap;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 0;
    align-items: center;
    text-align: center;
    margin-right: auto;
    margin-left: auto;
    transition-timing-function: ease-out;
    transition: opacity 0.2s;
    width: 100%;

    `;
    const CTALogoOne = styled.img`
    margin-bottom: 12px;
    max-width: 600px;
    min-height: 1px;
    display: block;
    width: 100%;
    `;

    const SignUp = styled.a`
    text-transform: uppercase;
    font-weight: bold;
    padding: 16.5px 0;
    width: 100%;
    color: f9f9f9;
    background-color: #0063e5;
    letter-spacing: 1.5px;
    font-size: 18px;
    border: 1px solid transparent;
    border-radius: 4px;
    cursor: pointer;

    &:hover{
        background-color: #0483ee;
    }
    `;

    const Description = styled.p`
    color: hsla(0,0%, 95.3%,1);
    font-size: 14px;
    margin: 20px 0 4%;
    line-height: 1.5;
    letter-spacing: 1.5px;
    `;

    const CTALogo2 = styled.img`
    max-width: 600px;
    margin-top: 0;
    width: 100%;
    display: inline-block;
    margin-bottom: 20px;
    vertical-align: bottom;

    `
    export default Login;

