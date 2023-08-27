import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="How to play" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Guess the Student. After each guess, the color of the tiles will change
        to show how close your guess was to the Student.
        Studentle is now maintained and updated by Ryan
        Originally created by Jack

      </p>

      <div className="mb-1 mt-4 flex justify-center">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="R"
          status="correct"
        />
        <Cell value="Y" isCompleted={true} />
        <Cell value="A" isCompleted={true} />
        <Cell value="N" isCompleted={true} />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter R is in the Student's name and in the correct spot.
      </p>

      <div className="mb-1 mt-4 flex justify-center">
        <Cell value="J" isCompleted={true} />
        <Cell value="A" isCompleted={true} />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="C"
          status="present"
        />
        <Cell value="K" isCompleted={true} />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter C is in the Student's name but in the wrong spot.
      </p>

      <div className="mb-1 mt-4 flex justify-center">
        <Cell value="R" isCompleted={true} />
        <Cell value="Y" isCompleted={true} />
        <Cell isRevealing={true} isCompleted={true} value="A" status="absent" />
        <Cell value="N" isCompleted={true} />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter A is not in the Student's name in any spot.
      </p>

      <p className="mt-6 text-sm italic text-gray-500 dark:text-gray-300">
        Studentle was forked from Reactle an open source version of the word
        guessing game we all know and love -{' '}
        <a
          href="https://github.com/Igetsisss/STUDENTLEV3"
          className="font-bold underline"
        >
          check out the code here
        </a>{' '}
      </p>
    </BaseModal>
  )
}
