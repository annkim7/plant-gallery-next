type MemberData = {
  name: string
  email: string
  password: string
  image: string
}

export const getMember = async (email: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_FETCH_URL}/api/mypage/profile/${email}`,
  )
  const data = await res.json()
  return data as MemberData
}

export const addMember = async (form: MemberData) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_FETCH_URL}/api/auth/signup`,
    {
      method: 'POST',
      body: JSON.stringify(form),
    },
  )
  const data = await res.json()
  return data
}
