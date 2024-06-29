export async function GET() {
    const res = await fetch('https://cataas.com/cat?json=true')
    const data = await res.json()
   console.log(data)
    return Response.json({ data })
  }