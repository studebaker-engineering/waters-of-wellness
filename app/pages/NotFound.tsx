import { Link } from "react-router";

export const NotFound = () => (
	<div className="container p-5 mx-auto">
		<section>
			<h1>Oops! Page not found.</h1>
			<p className="mb-3">
				Sorry, the page oyu are looking for could not be found.
			</p>

			<Link to="/" className="bg-seafoam-200 rounded-full px-3 py-1">
				Take me home
			</Link>
		</section>
	</div>
);

export default NotFound;
