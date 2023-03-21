import Link from "next/link"
import { getSortedPostsData } from "../../../utils/posts"
import Layout from "../layout"
import Date from "../../../components/Date"

export default async function Blog() {
  const allPostsData = getSortedPostsData() as any

  return (
    <section>
      <h2>Blog</h2>
      <ul>
        {allPostsData.map(({ id, date, title }) => (
          <li key={id} className="my-10 flex w-1/3 shadow">
            <Link href={`/posts/${id}` as any}>{title}</Link>
            <br />
            <small>
              <Date dateString={date} />
            </small>
          </li>
        ))}
      </ul>
    </section>
  )
}
