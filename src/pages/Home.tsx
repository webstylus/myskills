import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, Keyboard, FlatList, Alert } from 'react-native'
import { Button } from '../components/Button'
import { SkillCard } from '../components/SkillCard'
import { styles } from './styles'

interface SkillData {
  id: string
  name: string
}

export function Home() {
  const [newSkill, setNewSkill] = useState('')
  const [mySkills, setMySkills] = useState<SkillData[]>([])
  const [greeting, setGreeting] = useState('')

  function handleAddNewSkill() {
    if (!newSkill) {
      Alert.alert('Ops!', 'Field is empty.')
      return false
    }
    if (mySkills.filter((skill) => skill.name === newSkill).length) {
      Alert.alert('Ops!', 'This skill exists.')
      return false
    }
    const data = {
      id: String(new Date().getTime()),
      name: newSkill
    }
    setMySkills((oldState) => [...oldState, data])
    setNewSkill('')
    Keyboard.dismiss()
  }

  function handleRemoveSkill(id: string) {
    setMySkills((oldState) => oldState.filter((skill) => skill.id !== id))
  }

  useEffect(() => {
    const currentHour = new Date().getHours()
    if (currentHour < 12 && currentHour > 5) {
      setGreeting('Good Morning')
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreeting('Good Afternoon')
    } else {
      setGreeting('Good Night')
    }
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text testID={'welcome'} style={styles.title}>
          Welcome, Rafael
        </Text>
        <Text style={styles.greeting}>{greeting}</Text>

        <TextInput
          testID={'input-new'}
          style={styles.input}
          placeholder={'New skill'}
          placeholderTextColor={'#555'}
          onChangeText={setNewSkill}
          value={newSkill}
        />

        <Button
          testID={'button-add'}
          onPress={handleAddNewSkill}
          title={'Add'}
          activeOpacity={0.7}
        />

        <Text style={[styles.title, { marginVertical: 30 }]}>My Skills</Text>
      </View>

      {mySkills && (
        <FlatList
          testID={'flat-list-skills'}
          keyboardShouldPersistTaps={'never'}
          data={mySkills}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <SkillCard
              name={item.name}
              onPress={() => handleRemoveSkill(item.id)}
            />
          )}
        />
      )}
    </View>
  )
}
