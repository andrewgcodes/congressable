import React from 'react'
import { Flex, Avatar, Text, Link } from '@hackclub/design-system'

const Bio = () => (
  <Flex align="center" my={2}>
    <Avatar
      src="https://media.licdn.com/dms/image/C5603AQEOCvLfx_LAzg/profile-displayphoto-shrink_200_200/0?e=1573689600&v=beta&t=txTihJR3jgGj98VnyRt4HHqnWUzNZoGQaR52JhTh2w8"
      alt="Andrew Gao"
      size="48px"
      mr={3}
      style={{ flexShrink: '0' }}
    />
    <Text align="left" fontSize={2}>
      A project by <strong>Andrew Gao</strong>, forked from Lachlan Campbell .{' '}
      <Link color="info" href="https://andrewgao.tech">
        Visit Andrew's website.
      </Link>
    </Text>
  </Flex>
)

export default Bio
