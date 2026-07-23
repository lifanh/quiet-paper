import { Prose } from "@lifanh/quiet-paper";

export function Article() {
	return (
		<Prose>
			<h2>Headings and body text</h2>
			<p>
				Paragraphs use a comfortable measure and relaxed line height.{" "}
				<strong>Strong emphasis</strong> stays in the ink color;{" "}
				<em>italic</em> inherits the same rhythm. Inline <code>code</code> gets
				a hairline border and surface background.
			</p>
			<p>
				A second paragraph shows the default spacing between blocks. Links
				behave like the rest of the site:{" "}
				<a href="/writing">Writing index</a>, <a href="/about">About</a>, or
				an{" "}
				<a href="https://docs.astro.build/en/guides/markdown-content/">
					external reference
				</a>
				.
			</p>
			<h3>Lists</h3>
			<ul>
				<li>One column, one accent, links that carry expression</li>
				<li>
					Nested items when structure matters
					<ul>
						<li>
							Inner item with <strong>bold</strong> label
						</li>
						<li>Another inner item</li>
					</ul>
				</li>
				<li>A closing top-level item</li>
			</ul>
			<ol>
				<li>
					Add a file under <code>src/content/posts/</code>
				</li>
				<li>
					Fill frontmatter: <code>title</code>, <code>description</code>,{" "}
					<code>date</code>
				</li>
				<li>
					Run <code>npm run dev</code> and open <code>/writing/your-slug</code>
				</li>
			</ol>
			<blockquote>
				<p>
					Quiet interfaces borrow from documents: one clear column, restrained
					navigation, and states that feel like marginal notes rather than
					billboards.
				</p>
			</blockquote>
			<pre>
				<code>{`import { getPublishedPosts, postPath } from "../lib/posts";

const posts = await getPublishedPosts();
posts.map((post) => postPath(post));`}</code>
			</pre>
			<table>
				<thead>
					<tr>
						<th>Element</th>
						<th>Role in this template</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							<code>Prose</code>
						</td>
						<td>Typography + quiet-paper modifiers for rendered HTML</td>
					</tr>
					<tr>
						<td>Frontmatter</td>
						<td>Title, description, date, tags, optional draft</td>
					</tr>
				</tbody>
			</table>
		</Prose>
	);
}

export function Callouts() {
	return (
		<Prose>
			<p>Explicit HTML callouts stay a separate contract from prose defaults:</p>
			<aside className="qp-callout qp-callout-note">
				<p>
					<strong>Note</strong>
				</p>
				<p>This is a quiet paper callout — used for supplementary context.</p>
			</aside>
			<aside className="qp-callout qp-callout-warning">
				<p>
					<strong>Warning</strong>
				</p>
				<p>Reaches for attention without breaking the page's quiet register.</p>
			</aside>
			<aside className="qp-callout qp-callout-error">
				<p>
					<strong>Error</strong>
				</p>
				<p>Reserved for content that genuinely needs it.</p>
			</aside>
		</Prose>
	);
}
