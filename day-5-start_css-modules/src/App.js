import './App.css';
import PageHeading from './components/typography/PageHeading';
import PageParagraph from './components/typography/PageParagraph';
import Container from './components/layout/Container';
import Button from './components/form/bottons/Button';

function App() {
	return (
		<Container>
			<PageHeading>CSS Modules ** Starts **</PageHeading>
			<div className="form-container">
				<div>
					<h2>Rules</h2>
					<PageParagraph>
						Lorem ipsum dolor sit amet, consectetur
						adipiscing elit. Quisque commodo ex quis ante
						sodales, id aliquam orci eleifend. Ut sodales
						dui in pulvinar convallis. Nam semper tortor
						hendrerit, lacinia mauris ac, aliquet mauris.
						Nullam laoreet, nisi vel fringilla faucibus,
						odio ligula rutrum sem, id interdum orci purus
						id nunc. Donec tristique dictum velit, sed
						sollicitudin purus tempus et. Pellentesque et
						ultrices leo. Vestibulum tincidunt lectus vel
						sem auctor consequat pellentesque semper nunc.
						Nunc pellentesque tincidunt est, sed fermentum
						ex vehicula in. Ut sit amet est tortor.
					</PageParagraph>
				</div>

				{/*REGISTER STARTS :::2:::*/}
				<div>
					<form className="form">
						<h3>Register</h3>
						<input placeholder="Name" />
						<input placeholder="City" />
						<Button>Register</Button>
						<Button variant="danger">Clear</Button>
					</form>
				</div>

				{/*LOG IN STARTS :::3:::*/}
				<div className="col-login">
					<button className="login">Login</button>
				</div>

				{/*TERMS* :::4:::*/}
				<div>
					<h3>Terms</h3>
					<PageParagraph>
						Aenean scelerisque dignissim sapien eget
						fringilla. Maecenas blandit sem id lectus
						pulvinar, vel ornare neque convallis. Vivamus
						vulputate tincidunt metus. Donec vitae
						pellentesque nisi. In sit amet pretium augue,
						vitae accumsan urna. Curabitur maximus congue
						odio sed egestas. Vivamus id consequat leo.
						Vestibulum non malesuada tortor. Sed enim arcu,
						accumsan id lorem ac, gravida consectetur nisl.
						Nullam vulputate malesuada tempus. Nullam rutrum
						risus et sagittis scelerisque. Etiam vel nisl
						non enim lobortis elementum.
					</PageParagraph>
					<PageParagraph>
						Aenean scelerisque dignissim sapien eget
						fringilla. Maecenas blandit sem id lectus
						pulvinar, vel ornare neque convallis. Vivamus
						vulputate tincidunt metus. Donec vitae
						pellentesque nisi. In sit amet pretium augue,
						vitae accumsan urna. Curabitur maximus congue
						odio sed egestas. Vivamus id consequat leo.
						Vestibulum no
					</PageParagraph>
				</div>
			</div>
		</Container>
	);
}

export default App;
