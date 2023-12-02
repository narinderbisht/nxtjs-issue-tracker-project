import React from 'react'

export default function IssuesTable({issues}) {
  return (
      <div>
          <table className="table table-zebra">
            <tr>
            <th>Issue ID</th>
                  <th>Issue Title</th>
                  <th>Issue Status</th>
            </tr>
            <tbody>
            {issues.map((issue, index) => (
                <tr key={index}>
                <td>{issue.id}</td>
                    <td>{issue.title}</td>
                    <td>{ issue.status }</td>
                </tr>
            ))}
            
            </tbody>
          </table>
        </div>
  )
}
