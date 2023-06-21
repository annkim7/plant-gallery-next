type MemberData = {
  name: string
  email: string | null | undefined
  password: string
  image: string | null | undefined
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

export const editMember = async (form: MemberData) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_FETCH_URL}/api/auth/edit`,
    {
      method: 'POST',
      body: JSON.stringify(form),
    },
  )
  const data = await res.json()
  return data
}

export const deleteMember = async (email: string | null | undefined) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_FETCH_URL}/api/auth/delete`,
    {
      method: 'POST',
      body: `${email}`,
    },
  )
  const data = await res.json()
  return data
}
