import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataProvider extends InMemoryDbService {
  createDb() {
    const dictionaries = [
      {
        id: 1,
        name: 'Словарь 500 v2',
        wordsLearned: 0,
        lastViewed: null,
        timeSpended: null,
        words: [
          {
            text: 'be (was, been)',
            transcription: '[biː]',
            translation: 'быть',
            category: 'Наиболее употребительные глаголы',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'do (did, done)',
            transcription: '[duː]',
            translation: 'делать',
            category: 'Наиболее употребительные глаголы',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'have (had, had)',
            transcription: '[hæv]',
            translation: 'иметь',
            category: 'Наиболее употребительные глаголы',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'make (made, made)',
            transcription: '[meɪk]',
            translation: 'делать',
            category: 'Наиболее употребительные глаголы',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'get (got, got / gotten)',
            transcription: '[gɛt]',
            translation: 'получать, становиться',
            category: 'Наиболее употребительные глаголы',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'go (went, gone)',
            transcription: '[gəʊ]',
            translation: 'идти',
            category: 'Наиболее употребительные глаголы',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'take (took, taken)',
            transcription: '[teɪk]',
            translation: 'брать',
            category: 'Наиболее употребительные глаголы',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'will',
            transcription: '[wɪl]',
            translation: '(образует будущее время)',
            category: 'Наиболее употребительные глаголы',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'move',
            transcription: '[muːv]',
            translation: 'двигать (-ся)',
            category: 'Основные глаголы движения',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'go (went, gone)',
            transcription: '[gəʊ]',
            translation: 'идти',
            category: 'Основные глаголы движения',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'walk',
            transcription: '[wɔːk]',
            translation: 'идти пешком, гулять',
            category: 'Основные глаголы движения',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'run (ran, run)',
            transcription: '[rʌn]',
            translation: 'бежать',
            category: 'Основные глаголы движения',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'turn',
            transcription: '[tɜːn]',
            translation: 'поворачивать',
            category: 'Основные глаголы движения',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'fly (flew, flown)',
            transcription: '[flaɪ]',
            translation: 'летать',
            category: 'Основные глаголы движения',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'drive (drove, driven)',
            transcription: '[draɪv]',
            translation: 'вести машину',
            category: 'Основные глаголы движения',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'swim (swam, swum)',
            transcription: '[swɪm]',
            translation: 'плыть',
            category: 'Основные глаголы движения',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'jump',
            transcription: '[ʤʌmp]',
            translation: 'прыгать',
            category: 'Основные глаголы движения',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'sit down (sat, sitten)',
            transcription: '[sɪt daʊn]',
            translation: 'садиться',
            category: 'Основные глаголы движения',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'lie down (lay, lain)',
            transcription: '[laɪ daʊn]',
            translation: 'ложиться',
            category: 'Основные глаголы движения',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'stand up (stood, stood)',
            transcription: '[stænd ʌp]',
            translation: 'вставать',
            category: 'Основные глаголы движения',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'stand (stood, stood)',
            transcription: '[stænd]',
            translation: 'стоять',
            category: 'Основные глаголы движения',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'lie (lay, lain)',
            transcription: '[laɪ]',
            translation: 'лежать',
            category: 'Основные глаголы движения',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'sit (sat, sitten)',
            transcription: '[sɪt]',
            translation: 'сидеть',
            category: 'Основные глаголы движения',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'step',
            transcription: '[stɛp]',
            translation: 'делать шаг',
            category: 'Основные глаголы движения',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'dance',
            transcription: '[dɑːns]',
            translation: 'танцевать',
            category: 'Основные глаголы движения',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'roll',
            transcription: '[rəʊl]',
            translation: 'катить (-ся)',
            category: 'Основные глаголы движения',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'push',
            transcription: '[pʊʃ]',
            translation: 'толкать, нажимать',
            category: 'Основные глаголы движения',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'pull',
            transcription: '[pʊl]',
            translation: 'тянуть',
            category: 'Основные глаголы движения',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'put (put, put)',
            transcription: '[pʊt]',
            translation: 'ставить, класть, помещать',
            category: 'Основные глаголы движения',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'take (took, taken)',
            transcription: '[teɪk]',
            translation: 'брать',
            category: 'Ручные действия',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'give (gave, given)',
            transcription: '[gɪv]',
            translation: 'давать',
            category: 'Ручные действия',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'pass',
            transcription: '[pɑːs]',
            translation: 'передавать',
            category: 'Ручные действия',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'throw (threw, thrown)',
            transcription: '[θrəʊ]',
            translation: 'бросать',
            category: 'Ручные действия',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'hit (hit, hit)',
            transcription: '[hɪt]',
            translation: 'бить',
            category: 'Ручные действия',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'touch',
            transcription: '[tʌʧ]',
            translation: 'прикасаться',
            category: 'Ручные действия',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'point at',
            transcription: '[pɔɪnt æt]',
            translation: 'указывать на что-то',
            category: 'Ручные действия',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'hold (held, held)',
            transcription: '[həʊld]',
            translation: 'держать',
            category: 'Ручные действия',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'knock',
            transcription: '[nɒk]',
            translation: 'стучать (напр. в дверь)',
            category: 'Ручные действия',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'say',
            transcription: '[seɪ]',
            translation: 'сказать',
            category: 'Глаголы речи, общения',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'speak (spoke, spoken)',
            transcription: '[spiːk]',
            translation: 'говорить',
            category: 'Глаголы речи, общения',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'tell (told, told)',
            transcription: '[tɛl]',
            translation: 'говорить, рассказывать, велеть',
            category: 'Глаголы речи, общения',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'talk',
            transcription: '[tɔːk]',
            translation: 'разговаривать',
            category: 'Глаголы речи, общения',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'ask',
            transcription: '[ɑːsk]',
            translation: 'просить, спрашивать',
            category: 'Глаголы речи, общения',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'answer',
            transcription: '[ˈɑːnsə]',
            translation: 'отвечать',
            category: 'Глаголы речи, общения',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'call',
            transcription: '[kɔːl]',
            translation: 'звонить по телефону',
            category: 'Глаголы речи, общения',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'text',
            transcription: '[tɛkst]',
            translation: 'писать сообщение',
            category: 'Глаголы речи, общения',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'cry',
            transcription: '[kraɪ]',
            translation: 'плакать, кричать',
            category: 'Глаголы речи, общения',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'explain',
            transcription: '[ɪksˈpleɪn]',
            translation: 'объяснять',
            category: 'Глаголы речи, общения',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'repeat',
            transcription: '[rɪˈpiːt]',
            translation: 'повторять',
            category: 'Глаголы речи, общения',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'understand (understood, understood)',
            transcription: '[ˌʌndəˈstænd]',
            translation: 'понимать',
            category: 'Глаголы речи, общения',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'teach (taught, taught)',
            transcription: '[tiːʧ]',
            translation: 'учить (обучать)',
            category: 'Глаголы речи, общения',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'learn',
            transcription: '[lɜːn]',
            translation: 'учить (учиться)',
            category: 'Глаголы речи, общения',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'study',
            transcription: '[ˈstʌdi]',
            translation: 'изучать',
            category: 'Глаголы речи, общения',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'read (read, read)',
            transcription: '[riːd]',
            translation: 'читать',
            category: 'Глаголы речи, общения',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'write (wrote, written)',
            transcription: '[raɪt]',
            translation: 'писать',
            category: 'Глаголы речи, общения',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'watch',
            transcription: '[wɒʧ]',
            translation: 'смотреть, наблюдать',
            category: 'Глаголы речи, общения',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'listen',
            transcription: '[ˈlɪsn]',
            translation: 'слушать',
            category: 'Глаголы речи, общения',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'hear (heard, heard)',
            transcription: '[hɪə]',
            translation: 'слышать',
            category: 'Глаголы речи, общения',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'help',
            transcription: '[hɛlp]',
            translation: 'помогать',
            category: 'Глаголы речи, общения',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'think (thought, thought)',
            transcription: '[θɪŋk]',
            translation: 'думать',
            category: 'Глаголы речи, общения',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'correct',
            transcription: '[kəˈrɛkt]',
            translation: 'исправлять',
            category: 'Глаголы речи, общения',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'make a mistake (made, made)',
            transcription: '[meɪk ə mɪsˈteɪk]',
            translation: 'делать ошибку',
            category: 'Глаголы речи, общения',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'hint',
            transcription: '[hɪnt]',
            translation: 'подсказывать, намекать',
            category: 'Глаголы речи, общения',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'forget (forgot, forgotten)',
            transcription: '[fəˈgɛt]',
            translation: 'забывать',
            category: 'Глаголы речи, общения',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'remember',
            transcription: '[rɪˈmɛmbə]',
            translation: 'помнить',
            category: 'Глаголы речи, общения',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'remind',
            transcription: '[ˈrɪmaɪnd]',
            translation: 'напоминать',
            category: 'Глаголы речи, общения',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'live',
            transcription: '[lɪv]',
            translation: 'жить',
            category: 'Глаголы, обозначающие повседневные дела',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'sleep (slept, slept)',
            transcription: '[sliːp]',
            translation: 'спать',
            category: 'Глаголы, обозначающие повседневные дела',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'wake up (woke, woken)',
            transcription: '[weɪk ʌp]',
            translation: 'просыпаться',
            category: 'Глаголы, обозначающие повседневные дела',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'go to bed (went, gone)',
            transcription: '[gəʊ tuː bɛd]',
            translation: 'идти спать',
            category: 'Глаголы, обозначающие повседневные дела',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'take a shower (took, taken)',
            transcription: '[teɪk ə ˈʃaʊə]',
            translation: 'принимать душ',
            category: 'Глаголы, обозначающие повседневные дела',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'brush one’s teeth',
            transcription: '[brʌʃ wʌnz tiːθ]',
            translation: 'чистить зубы',
            category: 'Глаголы, обозначающие повседневные дела',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'comb one’s hair',
            transcription: '[kəʊm wʌnz heə]',
            translation: 'причесываться',
            category: 'Глаголы, обозначающие повседневные дела',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'shave',
            transcription: '[ʃeɪv]',
            translation: 'бриться',
            category: 'Глаголы, обозначающие повседневные дела',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'get dressed (got, got / gotten)',
            transcription: '[gɛt drɛst]',
            translation: 'одеваться',
            category: 'Глаголы, обозначающие повседневные дела',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'put on make-up (put, put)',
            transcription: '[pʊt ɒn ˈmeɪkʌp]',
            translation: 'делать макияж',
            category: 'Глаголы, обозначающие повседневные дела',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'make breakfast (made, made)',
            transcription: '[meɪk ˈbrɛkfəst]',
            translation: 'готовить завтрак',
            category: 'Глаголы, обозначающие повседневные дела',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'have breakfast (had, had)',
            transcription: '[hæv ˈbrɛkfəst]',
            translation: 'завтракать',
            category: 'Глаголы, обозначающие повседневные дела',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'go to work (went, gone)',
            transcription: '[gəʊ tuː wɜːk]',
            translation: 'идти на работу',
            category: 'Глаголы, обозначающие повседневные дела',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'work',
            transcription: '[wɜːk]',
            translation: 'работать',
            category: 'Глаголы, обозначающие повседневные дела',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'rest',
            transcription: '[rɛst]',
            translation: 'отдыхать',
            category: 'Глаголы, обозначающие повседневные дела',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'take a bath (took, taken)',
            transcription: '[teɪk ə bɑːθ]',
            translation: 'принимать ванну',
            category: 'Глаголы, обозначающие повседневные дела',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'cook',
            transcription: '[kʊk]',
            translation: 'готовить (еду)',
            category: 'Глаголы, обозначающие повседневные дела',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'eat (ate, eaten)',
            transcription: '[iːt]',
            translation: 'есть',
            category: 'Глаголы, обозначающие повседневные дела',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'do cleaning, clean (did, done)',
            transcription: '[duː ˈkliːnɪŋ] [kliːn]',
            translation: 'убираться',
            category: 'Глаголы, обозначающие повседневные дела',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'do dishes (did, done)',
            transcription: '[duː dɪʃɪz]',
            translation: 'мыть посуду',
            category: 'Глаголы, обозначающие повседневные дела',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'do the laundry (did, done)',
            transcription: '[duː ðə ˈlɔːndri]',
            translation: 'заниматься стиркой',
            category: 'Глаголы, обозначающие повседневные дела',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'work out',
            transcription: '[wɜːk aʊt]',
            translation: 'заниматься спортом',
            category: 'Глаголы, обозначающие повседневные дела',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'have fun (had, had)',
            transcription: '[hæv fʌn]',
            translation: 'развлекаться, веселиться',
            category: 'Глаголы, обозначающие повседневные дела',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'play',
            transcription: '[pleɪ]',
            translation: 'играть',
            category: 'Глаголы, обозначающие повседневные дела',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'begin (began, begun)',
            transcription: '[bɪˈgɪn]',
            translation: 'начинаться (-ся)',
            category: 'Этапы действия',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'start',
            transcription: '[stɑːt]',
            translation: 'начинаться (-ся)',
            category: 'Этапы действия',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'continue',
            transcription: '[kənˈtɪnju(ː)]',
            translation: 'продолжать (-ся)',
            category: 'Этапы действия',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'go on (went, gone)',
            transcription: '[gəʊ ɒn]',
            translation: 'продолжать (-ся)',
            category: 'Этапы действия',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'end',
            transcription: '[ɛnd]',
            translation: 'заканчивать (-ся)',
            category: 'Этапы действия',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'finish',
            transcription: '[ˈfɪnɪʃ]',
            translation: 'заканчивать (-ся)',
            category: 'Этапы действия',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'stop',
            transcription: '[stɒp]',
            translation: 'прекращать, останавливать (-ся)',
            category: 'Этапы действия',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'complete',
            transcription: '[kəmˈpliːt]',
            translation: 'завершать (-ся)',
            category: 'Этапы действия',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'postpone',
            transcription: '[pɛʊstˈpəʊn]',
            translation: 'откладывать, переносить',
            category: 'Этапы действия',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'put off (put, put)',
            transcription: '[pʊt ɒf]',
            translation: 'откладывать, переносить',
            category: 'Этапы действия',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'time',
            transcription: '[taɪm]',
            translation: 'время',
            category: 'Единицы времени, слова на тему "Время"',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'past',
            transcription: '[pɑːst]',
            translation: 'прошлое',
            category: 'Единицы времени, слова на тему "Время"',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'future',
            transcription: '[ˈfjuːʧə]',
            translation: 'будущее',
            category: 'Единицы времени, слова на тему "Время"',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'present',
            transcription: '[ˈprɛznt]',
            translation: 'настоящее',
            category: 'Единицы времени, слова на тему "Время"',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'age',
            transcription: '[eɪʤ]',
            translation: 'эра, эпоха (также "возраст")',
            category: 'Единицы времени, слова на тему "Время"',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'millennium',
            transcription: '[mɪlˈiːnɪəːm]',
            translation: 'тысячелетие',
            category: 'Единицы времени, слова на тему "Время"',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'century',
            transcription: '[ˈsɛnʧʊri]',
            translation: 'век',
            category: 'Единицы времени, слова на тему "Время"',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'decade',
            transcription: '[ˈdɛkeɪd]',
            translation: 'десятилетие',
            category: 'Единицы времени, слова на тему "Время"',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'year',
            transcription: '[jɪə]',
            translation: 'год',
            category: 'Единицы времени, слова на тему "Время"',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'month',
            transcription: '[mʌnθ]',
            translation: 'месяц',
            category: 'Единицы времени, слова на тему "Время"',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'week',
            transcription: '[wiːk]',
            translation: 'неделя',
            category: 'Единицы времени, слова на тему "Время"',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'day',
            transcription: '[deɪ]',
            translation: 'день',
            category: 'Единицы времени, слова на тему "Время"',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'hour',
            transcription: '[ˈaʊə]',
            translation: 'час',
            category: 'Единицы времени, слова на тему "Время"',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'half an hour',
            transcription: '[hɑːf ən ˈaʊə]',
            translation: 'полчаса',
            category: 'Единицы времени, слова на тему "Время"',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'minute',
            transcription: '[ˈmɪnɪt]',
            translation: 'минута',
            category: 'Единицы времени, слова на тему "Время"',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'second',
            transcription: '[ˈsɛkənd]',
            translation: 'секунда',
            category: 'Единицы времени, слова на тему "Время"',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'watch',
            transcription: '[wɒʧ]',
            translation: 'часы (наручные)',
            category: 'Единицы времени, слова на тему "Время"',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'clock',
            transcription: '[klɒk]',
            translation: 'часы (настенные)',
            category: 'Единицы времени, слова на тему "Время"',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'calendar',
            transcription: '[ˈkælɪndə]',
            translation: 'календарь',
            category: 'Единицы времени, слова на тему "Время"',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'schedule',
            transcription: '[ˈʃɛdjuːl]',
            translation: 'расписание',
            category: 'Единицы времени, слова на тему "Время"',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'season',
            transcription: '[ˈsiːzn]',
            translation: 'время года',
            category: 'Месяцы, времена года, дни недели',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'winter',
            transcription: '[ˈwɪntə]',
            translation: 'зима',
            category: 'Месяцы, времена года, дни недели',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'spring',
            transcription: '[sprɪŋ]',
            translation: 'весна',
            category: 'Месяцы, времена года, дни недели',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'summer',
            transcription: '[ˈsʌmə]',
            translation: 'лето',
            category: 'Месяцы, времена года, дни недели',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'fall (Am.) autumn (Br.)',
            transcription: '[fɔːl] [ˈɔːtəm]',
            translation: 'осень',
            category: 'Месяцы, времена года, дни недели',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'January',
            transcription: '[ˈʤænjʊəri]',
            translation: 'январь',
            category: 'Месяцы, времена года, дни недели',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'February',
            transcription: '[ˈfɛbrʊəri]',
            translation: 'февраль',
            category: 'Месяцы, времена года, дни недели',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'March',
            transcription: '[mɑːʧ]',
            translation: 'март',
            category: 'Месяцы, времена года, дни недели',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'April',
            transcription: '[ˈeɪprəl]',
            translation: 'апрель',
            category: 'Месяцы, времена года, дни недели',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'May',
            transcription: '[meɪ]',
            translation: 'май',
            category: 'Месяцы, времена года, дни недели',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'June',
            transcription: '[ʤuːn]',
            translation: 'июнь',
            category: 'Месяцы, времена года, дни недели',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'July',
            transcription: '[ʤuˈlaɪ]',
            translation: 'июль',
            category: 'Месяцы, времена года, дни недели',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'August',
            transcription: '[ˈɔːgəst]',
            translation: 'август',
            category: 'Месяцы, времена года, дни недели',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'September',
            transcription: '[sɛpˈtɛmbə]',
            translation: 'сентябрь',
            category: 'Месяцы, времена года, дни недели',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'October',
            transcription: '[ɒkˈtəʊbə]',
            translation: 'октябрь',
            category: 'Месяцы, времена года, дни недели',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'November',
            transcription: '[nəʊˈvɛmbə]',
            translation: 'ноябрь',
            category: 'Месяцы, времена года, дни недели',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'December',
            transcription: '[dɪˈsɛmbə]',
            translation: 'декабрь',
            category: 'Месяцы, времена года, дни недели',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'Monday',
            transcription: '[ˈmʌndeɪ]',
            translation: 'понедельник',
            category: 'Месяцы, времена года, дни недели',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'Tuesday',
            transcription: '[ˈtjuːzdeɪ]',
            translation: 'вторник',
            category: 'Месяцы, времена года, дни недели',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'Wednesday',
            transcription: '[ˈwɛnzdeɪ]',
            translation: 'среда',
            category: 'Месяцы, времена года, дни недели',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'Thursday',
            transcription: '[ˈθɜːzdeɪ]',
            translation: 'четверг',
            category: 'Месяцы, времена года, дни недели',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'Friday',
            transcription: '[ˈfraɪdeɪ]',
            translation: 'пятница',
            category: 'Месяцы, времена года, дни недели',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'Saturday',
            transcription: '[ˈsætədeɪ]',
            translation: 'суббота',
            category: 'Месяцы, времена года, дни недели',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'Sunday',
            transcription: '[ˈsʌndeɪ]',
            translation: 'воскресенье',
            category: 'Месяцы, времена года, дни недели',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'family',
            transcription: '[ˈfæmɪli]',
            translation: 'семья',
            category: 'Семья, родственники',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'love',
            transcription: '[lʌv]',
            translation: 'любовь',
            category: 'Семья, родственники',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'human',
            transcription: '[ˈhjuːmən]',
            translation: 'человек',
            category: 'Семья, родственники',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'people',
            transcription: '[ˈpiːpl]',
            translation: 'люди, народ',
            category: 'Семья, родственники',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'man',
            transcription: '[mæn]',
            translation: 'мужчина, человек',
            category: 'Семья, родственники',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'woman',
            transcription: '[ˈwʊmən]',
            translation: 'женщина',
            category: 'Семья, родственники',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'boy',
            transcription: '[bɔɪ]',
            translation: 'мальчик',
            category: 'Семья, родственники',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'guy',
            transcription: '[gaɪ]',
            translation: 'парень',
            category: 'Семья, родственники',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'girl',
            transcription: '[gɜːl]',
            translation: 'девочка, девушка',
            category: 'Семья, родственники',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'parents',
            transcription: '[ˈpeərənts]',
            translation: 'родители',
            category: 'Семья, родственники',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'mother',
            transcription: '[ˈmʌðə]',
            translation: 'мать',
            category: 'Семья, родственники',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'father',
            transcription: '[ˈfɑːðə]',
            translation: 'отец',
            category: 'Семья, родственники',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'mom (Am.), mum (Br.)',
            transcription: '[mɒm], [mʌm]',
            translation: 'мама',
            category: 'Семья, родственники',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'dad',
            transcription: '[dæd]',
            translation: 'папа',
            category: 'Семья, родственники',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'grandmother',
            transcription: '[ˈgrænˌmʌðə]',
            translation: 'бабушка',
            category: 'Семья, родственники',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'grandfather',
            transcription: '[ˈgrændˌfɑːðə]',
            translation: 'дедушка',
            category: 'Семья, родственники',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'grandparents',
            transcription: '[ˈgrænˌpeərənts]',
            translation: 'бабушки и дедушки',
            category: 'Семья, родственники',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'brother',
            transcription: '[ˈbrʌðə]',
            translation: 'брат',
            category: 'Семья, родственники',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'sister',
            transcription: '[ˈsɪstə]',
            translation: 'сестра',
            category: 'Семья, родственники',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'siblings',
            transcription: '[ˈsɪblɪŋz]',
            translation: 'братья и сестры',
            category: 'Семья, родственники',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'cousin',
            transcription: '[ˈkʌzn]',
            translation: 'кузен (двоюродные братья и сестры)',
            category: 'Семья, родственники',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'wife',
            transcription: '[waɪf]',
            translation: 'жена',
            category: 'Семья, родственники',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'husband',
            transcription: '[ˈhʌzbənd]',
            translation: 'муж',
            category: 'Семья, родственники',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'father-in-law',
            transcription: '[ˈfɑːðərɪnlɔː]',
            translation: 'тесть',
            category: 'Семья, родственники',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'mother-in-law',
            transcription: '[ˈmʌðərɪnlɔː]',
            translation: 'теща',
            category: 'Семья, родственники',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'son-in-law',
            transcription: '[ˈsʌnɪnlɔː]',
            translation: 'зять',
            category: 'Семья, родственники',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'daughter-in-law',
            transcription: '[ˈdɔːtərɪnlɔː]',
            translation: 'невестка',
            category: 'Семья, родственники',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'son',
            transcription: '[sʌn]',
            translation: 'сын',
            category: 'Семья, родственники',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'daughter',
            transcription: '[ˈdɔːtə]',
            translation: 'дочь',
            category: 'Семья, родственники',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'baby',
            transcription: '[ˈbeɪbi]',
            translation: 'маленький ребенок',
            category: 'Семья, родственники',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'children, kids',
            transcription: '[ˈʧɪldrən], [kɪdz]',
            translation: 'дети',
            category: 'Семья, родственники',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'teenager',
            transcription: '[ˈtiːnˌeɪʤə]',
            translation: 'подросток',
            category: 'Семья, родственники',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'aunt',
            transcription: '[ɑːnt]',
            translation: 'тетя',
            category: 'Семья, родственники',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'uncle',
            transcription: '[ˈʌŋkl]',
            translation: 'дядя',
            category: 'Семья, родственники',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'niece',
            transcription: '[niːs]',
            translation: 'племянница',
            category: 'Семья, родственники',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'nephew',
            transcription: '[ˈnɛvju(ː)] [ˈnɛfju(ː)]',
            translation: 'племянник',
            category: 'Семья, родственники',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'girlfriend',
            transcription: '[ˈgɜːlˌfrɛnd]',
            translation: 'девушка (подруга)',
            category: 'Семья, родственники',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'boyfriend',
            transcription: '[ˈbɔɪˌfrɛnd]',
            translation: 'парень (бойфренд)',
            category: 'Семья, родственники',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'friend',
            transcription: '[frɛnd]',
            translation: 'друг',
            category: 'Семья, родственники',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'relatives',
            transcription: '[ˈrɛlətɪvz]',
            translation: 'родственники',
            category: 'Семья, родственники',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'engagement',
            transcription: '[ɪnˈgeɪʤmənt]',
            translation: 'помолвка',
            category: 'Семья, родственники',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'marriage',
            transcription: '[ˈmærɪʤ]',
            translation: 'женитьба, замужество, брак',
            category: 'Семья, родственники',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'wedding',
            transcription: '[ˈwɛdɪŋ]',
            translation: 'свадьба',
            category: 'Семья, родственники',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'fiancée, bride',
            transcription: "[fɪ'ɑːn(t)seɪ], [braɪd]",
            translation: 'невеста',
            category: 'Семья, родственники',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'fiancé, groom (bridegroom)',
            transcription: "[fɪ'ɑːn(t)seɪ], [grʊm] [ˈbraɪdgrʊm]",
            translation: 'жених',
            category: 'Семья, родственники',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'funeral',
            transcription: '[ˈfjuːnərəl]',
            translation: 'похороны',
            category: 'Семья, родственники',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'birth',
            transcription: '[bɜːθ]',
            translation: 'рождение',
            category: 'Семья, родственники',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'house',
            transcription: '[haʊs]',
            translation: 'дом',
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'home',
            transcription: '[həʊm]',
            translation: 'дом',
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'apartment (USA), flat (UK)',
            transcription: '[əpˈɑːtmənt], [flæt]',
            translation: 'квартира',
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'roof',
            transcription: '[ruːf]',
            translation: 'крыша',
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'room',
            transcription: '[ruːm]',
            translation: 'комната',
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'wall',
            transcription: '[wɔːl]',
            translation: 'стена',
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'floor',
            transcription: '[flɔː]',
            translation: 'пол, этаж',
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'stairs',
            transcription: '[steəz]',
            translation: 'лестница, ступеньки',
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'ceiling',
            transcription: '[ˈsiːlɪŋ]',
            translation: 'потолок',
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'window',
            transcription: '[ˈwɪndəʊ]',
            translation: 'окно',
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'door',
            transcription: '[dɔː]',
            translation: 'дверь',
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'doorbell',
            transcription: '[ˈdɔːbɛl]',
            translation: 'дверной звонок',
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'lock',
            transcription: '[lɒk]',
            translation: 'замок',
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'key',
            transcription: '[kiː]',
            translation: 'ключ',
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'furniture',
            transcription: '[ˈfɜːnɪʧə]',
            translation: 'мебель',
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'thing',
            transcription: '[θɪŋ]',
            translation: 'вещь, предмет',
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'lamp',
            transcription: '[læmp]',
            translation: 'лампа',
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'light bulb',
            transcription: '[laɪt bʌlb]',
            translation: 'лампочка',
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'table',
            transcription: '[ˈteɪbl]',
            translation: 'стол',
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'desk',
            transcription: '[dɛsk]',
            translation: 'письменный стол',
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'chair',
            transcription: '[ʧeə]',
            translation: 'стул',
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'armchair',
            transcription: '[ˈɑːmˈʧeə]',
            translation: 'кресло',
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'sofa (coach)',
            transcription: '[ˈsəʊfə] [kəʊʧ]',
            translation: 'диван',
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'stove (US), cooker (Br)',
            transcription: '[stəʊv]',
            translation: 'кухонная плита',
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'vacuum cleaner',
            transcription: '[ˈvækjʊəm ˈkliːnə]',
            translation: 'пылесос',
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'microwave',
            transcription: '[ˈmaɪkrəʊweɪv]',
            translation: 'микроволновая печь',
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'air conditioner (AC)',
            transcription: '[eə kənˈdɪʃənə] [eɪ-siː]',
            translation: 'кондиционер',
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'tap, faucet',
            transcription: '[tæp], [ˈfɔːsɪt]',
            translation: 'водопроводный кран',
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'shower',
            transcription: '[ˈʃaʊə]',
            translation: 'душ',
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'washing machine',
            transcription: '[ˈwɒʃɪŋ] [məˈʃiːn]',
            translation: 'стиральная машина',
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'soap',
            transcription: '[səʊp]',
            translation: 'мыло',
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'shampoo',
            transcription: '[ʃæmˈpuː]',
            translation: 'шампунь',
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'toiletries',
            transcription: '[ˈtɔɪlɪtriz]',
            translation: 'туалетные принадлежности (мыло, шампунь и проч.)',
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'bathroom',
            transcription: '[ˈbɑːθru(ː)m]',
            translation: 'ванная комната \\ туалет',
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'mirror',
            transcription: '[ˈmɪrə]',
            translation: 'зеркало',
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'hall',
            transcription: '[hɔːl]',
            translation: 'зал, холл',
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'hall, hallway',
            transcription: '[hɔːl] [ˈhɔːlweɪ]',
            translation: 'коридор, прихожая',
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'living room',
            transcription: '[ˈlɪvɪŋ ruːm]',
            translation: 'гостиная',
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'kitchen',
            transcription: '[ˈkɪʧɪn]',
            translation: 'кухня',
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'bedroom',
            transcription: '[ˈbɛdru(ː)m]',
            translation: 'спальня',
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'neighbour (neighbor)',
            transcription: '[ˈneɪbə]',
            translation: 'сосед',
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'wardrobe',
            transcription: '[ˈwɔːdrəʊb]',
            translation: 'шкаф для одежды',
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'cupboard',
            transcription: '[ˈkʌbəd]',
            translation: 'шкаф, буфет',
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'closet',
            transcription: '[ˈklɒzɪt]',
            translation: 'шкаф, кладовка',
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'dishes',
            transcription: '[ˈdɪʃɪz]',
            translation: 'тарелки, посуда',
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'cup',
            transcription: '[kʌp]',
            translation: 'чашка',
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'fork',
            transcription: '[fɔːk]',
            translation: 'вилка',
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'spoon',
            transcription: '[spuːn]',
            translation: 'ложка',
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'plate',
            transcription: '[pleɪt]',
            translation: 'тарелка',
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'knife',
            transcription: '[naɪf]',
            translation: 'нож',
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'tools',
            transcription: '[tuːlz]',
            translation: 'инструменты',
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'TV',
            transcription: '[ˌtiːˈviː]',
            translation: 'телевизор',
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'remote control',
            transcription: '[rɪˈməʊt kənˈtrəʊl]',
            translation: 'пульт управления',
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'computer',
            transcription: '[kəmˈpjuːtə]',
            translation: 'компьютер',
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'laptop',
            transcription: '[ˈlæpˌtɒp]',
            translation: 'ноутбук',
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'phone',
            transcription: '[fəʊn]',
            translation: 'телефон',
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'bed',
            transcription: '[bɛd]',
            translation: 'кровать',
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'blanket',
            transcription: '[ˈblæŋkɪt]',
            translation: 'одеяло',
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'pillow',
            transcription: '[ˈpɪləʊ]',
            translation: 'подушка',
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'pillowcase',
            transcription: '[ˈpɪləʊkeɪs]',
            translation: 'наволочка',
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'sheet (bedsheet)',
            transcription: '[ʃiːt]',
            translation: 'простыня',
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'linens',
            transcription: '[ˈlɪnɪnz]',
            translation: 'постельное белье',
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'towel',
            transcription: '[ˈtaʊəl]',
            translation: 'полотенце',
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'movie \\ film',
            transcription: '[ˈmuːvi] [fɪlm]',
            translation: 'фильм',
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'book',
            transcription: '[bʊk]',
            translation: 'книга',
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'camera',
            transcription: '[ˈkæmərə]',
            translation: 'фотоаппарат, видеокамера',
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'newspaper',
            transcription: '[ˈnjuːzˌpeɪpə]',
            translation: 'газета',
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'magazine',
            transcription: '[ˌmægəˈziːn]',
            translation: 'журнал',
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'clothes',
            transcription: '[kləʊðz]',
            translation: 'одежда',
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'shirt',
            transcription: '[ʃɜːt]',
            translation: 'рубашка',
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'pants (trousers)',
            transcription: '[pænts] [ˈtraʊzəz]',
            translation: 'брюки',
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'jacket',
            transcription: '[ˈʤækɪt]',
            translation: 'пиджак',
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'sweater (jumper)',
            transcription: '[ˈswɛtə] [ˈʤʌmpə]',
            translation: 'свитер, джемпер',
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'hat',
            transcription: '[hæt]',
            translation: 'шляпа',
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'cap',
            transcription: '[ˈkæp]',
            translation: 'кепка',
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'pocket',
            transcription: '[ˈpɒkɪt]',
            translation: 'карман',
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'shorts',
            transcription: '[ʃɔːts]',
            translation: 'шорты',
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'shoes',
            transcription: '[ʃuːz]',
            translation: 'туфли',
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'dress',
            transcription: '[drɛs]',
            translation: 'платье',
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'skirt',
            transcription: '[skɜːt]',
            translation: 'юбка',
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'jeans',
            transcription: '[ʤiːnz]',
            translation: 'джинсы',
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'underwear',
            transcription: '[ˈʌndəweə]',
            translation: 'нижнее белье',
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'socks',
            transcription: '[sɒks]',
            translation: 'носки',
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'bag',
            transcription: '[bæg]',
            translation: 'сумка',
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'purse',
            transcription: '[pɜːs]',
            translation: 'дамская сумочка, кошелек',
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'coat',
            transcription: '[kəʊt]',
            translation: 'пальто',
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'scarf',
            transcription: '[skɑːf]',
            translation: 'шарф',
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'gloves',
            transcription: '[glʌvz]',
            translation: 'перчатки',
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'wallet',
            transcription: '[ˈwɒlɪt]',
            translation: 'бумажник',
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'uniform',
            transcription: '[ˈjuːnɪfɔːm]',
            translation: 'униформа',
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'belt',
            transcription: '[bɛlt]',
            translation: 'ремень',
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'button',
            transcription: '[ˈbʌtn]',
            translation: 'кнопка, пуговица',
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'zip',
            transcription: '[zɪp]',
            translation: 'застежка молния',
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'nature',
            transcription: '[ˈneɪʧə]',
            translation: 'природа',
            category: 'Природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'North',
            transcription: '[nɔːθ]',
            translation: 'север',
            category: 'Природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'South',
            transcription: '[saʊθ]',
            translation: 'юг',
            category: 'Природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'West',
            transcription: '[wɛst]',
            translation: 'запад',
            category: 'Природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'East',
            transcription: '[iːst]',
            translation: 'восток',
            category: 'Природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'Sun',
            transcription: '[sʌn]',
            translation: 'солнце',
            category: 'Природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'Moon',
            transcription: '[muːn]',
            translation: 'луна',
            category: 'Природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'star',
            transcription: '[stɑː]',
            translation: 'звезда',
            category: 'Природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'sky',
            transcription: '[skaɪ]',
            translation: 'небо',
            category: 'Природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'Earth',
            transcription: '[ɜːθ]',
            translation: 'Земля',
            category: 'Природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'ground',
            transcription: '[graʊnd]',
            translation: 'земля',
            category: 'Природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'space',
            transcription: '[speɪs]',
            translation: 'космос, пространство',
            category: 'Природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'air',
            transcription: '[eə]',
            translation: 'воздух',
            category: 'Природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'plant',
            transcription: '[plɑːnt]',
            translation: 'растение',
            category: 'Природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'tree',
            transcription: '[triː]',
            translation: 'дерево',
            category: 'Природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'flower',
            transcription: '[ˈflaʊə]',
            translation: 'цветок',
            category: 'Природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'domestic animal',
            transcription: '[dəʊˈmɛstɪk ˈænɪməl]',
            translation: 'домашнее животное',
            category: 'Природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'wild animal',
            transcription: '[waɪld ˈænɪməl]',
            translation: 'дикое животное',
            category: 'Природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'bird',
            transcription: '[bɜːd]',
            translation: 'птица',
            category: 'Природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'poultry',
            transcription: '[ˈpəʊltri]',
            translation: 'домашняя птица',
            category: 'Природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'pet',
            transcription: '[pɛt]',
            translation: 'домашнее животное (питомец)',
            category: 'Природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'cat',
            transcription: '[kæt]',
            translation: 'кошка',
            category: 'Природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'dog',
            transcription: '[dɒg]',
            translation: 'собака',
            category: 'Природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'horse',
            transcription: '[hɔːs]',
            translation: 'лошадь',
            category: 'Природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'chicken',
            transcription: '[ˈʧɪkɪn]',
            translation: 'цыпленок, курица',
            category: 'Природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'mouse',
            transcription: '[maʊs]',
            translation: 'мышь',
            category: 'Природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'sea',
            transcription: '[siː]',
            translation: 'море',
            category: 'Природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'seashore \\ bank',
            transcription: '[ˈsiːʃɔː] [bæŋk]',
            translation: 'берег',
            category: 'Природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'river',
            transcription: '[ˈrɪvə]',
            translation: 'река',
            category: 'Природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'snow',
            transcription: '[snəʊ]',
            translation: 'снег',
            category: 'Природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'sand',
            transcription: '[sænd]',
            translation: 'песок',
            category: 'Природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'rain',
            transcription: '[reɪn]',
            translation: 'дождь',
            category: 'Природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'cold',
            transcription: '[kəʊld]',
            translation: 'холод',
            category: 'Природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'heat',
            transcription: '[hiːt]',
            translation: 'жара',
            category: 'Природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'fire',
            transcription: '[ˈfaɪə]',
            translation: 'огонь, пожар',
            category: 'Природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'water',
            transcription: '[ˈwɔːtə]',
            translation: 'вода',
            category: 'Природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'wind',
            transcription: '[wɪnd]',
            translation: 'ветер',
            category: 'Природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'storm',
            transcription: '[stɔːm]',
            translation: 'буря',
            category: 'Природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'weather',
            transcription: '[ˈwɛðə]',
            translation: 'погода',
            category: 'Природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'weather forecast',
            transcription: '[ˈwɛðə ˈfɔːkɑːst]',
            translation: 'прогноз погоды',
            category: 'Природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'city \\ town',
            transcription: '[ˈsɪti] [taʊn]',
            translation: 'город',
            category: 'Город',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'building',
            transcription: '[ˈbɪldɪŋ]',
            translation: 'здание',
            category: 'Город',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'street',
            transcription: '[striːt]',
            translation: 'улица',
            category: 'Город',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'block',
            transcription: '[blɒk]',
            translation: 'квартал',
            category: 'Город',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'traffic lights',
            transcription: '[ˈtræfɪk laɪts]',
            translation: 'светофор',
            category: 'Город',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'intersection',
            transcription: '[ˌɪntə(ː)ˈsɛkʃən]',
            translation: 'перекресток',
            category: 'Город',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'crosswalk',
            transcription: '[ˈkrɒswɔːk]',
            translation: 'пешеходный переход',
            category: 'Город',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'road sign (traffc sign)',
            transcription: '[rəʊd saɪn]',
            translation: 'дорожный знак',
            category: 'Город',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'car',
            transcription: '[kɑː]',
            translation: 'автомобиль',
            category: 'Город',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'public transport',
            transcription: '[ˈpʌblɪk ˈtrænspɔːt]',
            translation: 'общественный транспорт',
            category: 'Город',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'airport',
            transcription: '[ˈeəpɔːt]',
            translation: 'аэропорт',
            category: 'Город',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'railway (railroad) station',
            transcription: '[ˈreɪlweɪ (ˈreɪlrəʊd) ˈsteɪʃən]',
            translation: 'вокзал',
            category: 'Город',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'port',
            transcription: '[pɔːt]',
            translation: 'порт',
            category: 'Город',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'bus station (bus terminal)',
            transcription: '[bʌs ˈsteɪʃən] [bʌs ˈtɜːmɪnl]',
            translation: 'автобусная станция',
            category: 'Город',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'taxi',
            transcription: '[ˈtæksi]',
            translation: 'такси',
            category: 'Город',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'bridge',
            transcription: '[brɪʤ]',
            translation: 'мост',
            category: 'Город',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'shop',
            transcription: '[ʃɒp]',
            translation: 'магазин',
            category: 'Город',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'mall',
            transcription: '[mɔːl]',
            translation: 'торговый центр',
            category: 'Город',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'cinema (UK), movie theater (US)',
            transcription: '[ˈsɪnəmə]',
            translation: 'кинотеатр',
            category: 'Город',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'theatre (theater)',
            transcription: '[ˈθɪətə]',
            translation: 'театр',
            category: 'Город',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'police department',
            transcription: '[pəˈliːs dˈepətmənt]',
            translation: 'полицейский участок',
            category: 'Город',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'hospital',
            transcription: '[ˈhɒspɪtl]',
            translation: 'больница',
            category: 'Город',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'hotel',
            transcription: '[həʊˈtɛl]',
            translation: 'гостиница',
            category: 'Город',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'post office',
            transcription: '[pəʊst ˈɒfɪs]',
            translation: 'почта',
            category: 'Город',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'wi-fi',
            transcription: "[ˌwaɪ'faɪ]",
            translation: 'вай-фай',
            category: 'Город',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'embassy',
            transcription: '[ˈɛmbəsi]',
            translation: 'посольство',
            category: 'Город',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'ambassador',
            transcription: '[æmˈbæsədə]',
            translation: 'посол',
            category: 'Город',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'passer-by',
            transcription: '[ˈpɑːsə baɪ]',
            translation: 'прохожий',
            category: 'Город',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'pedestrian',
            transcription: '[pɪˈdɛstrɪən]',
            translation: 'пешеход',
            category: 'Город',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'police officer',
            transcription: '[pəˈliːs ˈɒfɪsə]',
            translation: 'полицейский',
            category: 'Город',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'emergency',
            transcription: '[ɪˈmɜːʤənsi]',
            translation: 'чрезвычайная ситуация',
            category: 'Город',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'map',
            transcription: '[mæp]',
            translation: 'карта',
            category: 'Город',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'subway',
            transcription: '[ˈsʌbweɪ]',
            translation: 'метро',
            category: 'Город',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'station',
            transcription: '[ˈsteɪʃən]',
            translation: 'станция',
            category: 'Город',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'stop',
            transcription: '[stɒp]',
            translation: 'остановка',
            category: 'Город',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'sightseeing',
            transcription: '[ˈsaɪtˌsiːɪŋ]',
            translation: 'осмотр достопримечательностей',
            category: 'Город',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'work',
            transcription: '[wɜːk]',
            translation: 'работа',
            category: 'Работа и деньги',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'job',
            transcription: '[ʤɒb]',
            translation: 'работа',
            category: 'Работа и деньги',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'office',
            transcription: '[ˈɒfɪs]',
            translation: 'офис',
            category: 'Работа и деньги',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'workplace',
            transcription: '[ˈwɜːkˌpleɪs]',
            translation: 'рабочее место',
            category: 'Работа и деньги',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'working hours',
            transcription: '[ˈwɜːkɪŋ ˈaʊəz]',
            translation: 'рабочие часы',
            category: 'Работа и деньги',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'schedule',
            transcription: '[ˈʃɛdjuːl]',
            translation: 'расписание, график',
            category: 'Работа и деньги',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'colleague',
            transcription: '[ˈkɒliːg]',
            translation: 'коллега',
            category: 'Работа и деньги',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'CV \\ resume',
            transcription: '[siː-viː] [ˈrɛzju(ː)meɪ]',
            translation: 'резюме',
            category: 'Работа и деньги',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'payday',
            transcription: '[ˈpeɪdeɪ]',
            translation: 'день зарплаты',
            category: 'Работа и деньги',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'paycheck',
            transcription: '[ˈpeɪˌʧɛk]',
            translation: 'зарплатный чек',
            category: 'Работа и деньги',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'salary',
            transcription: '[ˈsæləri]',
            translation: 'зарплата',
            category: 'Работа и деньги',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'duties',
            transcription: '[ˈdjuːtiz]',
            translation: 'обязанности',
            category: 'Работа и деньги',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'employer',
            transcription: '[ɪmˈplɔɪə]',
            translation: 'работодатель',
            category: 'Работа и деньги',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'employee',
            transcription: '[ˌɛmplɔɪˈiː]',
            translation: 'работник',
            category: 'Работа и деньги',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'social security',
            transcription: '[ˈsəʊʃəl sɪˈkjʊərɪti]',
            translation: 'социальное страхование',
            category: 'Работа и деньги',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'job interview',
            transcription: '[ʤɒb ˈɪntəvjuː]',
            translation: 'собеседование на работу',
            category: 'Работа и деньги',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'health',
            transcription: '[hɛlθ]',
            translation: 'здоровье',
            category: 'Работа и деньги',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'money',
            transcription: '[ˈmʌni]',
            translation: 'деньги',
            category: 'Работа и деньги',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'cash',
            transcription: '[kæʃ]',
            translation: 'наличные',
            category: 'Работа и деньги',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'bill',
            transcription: '[bɪl]',
            translation: 'купюра',
            category: 'Работа и деньги',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'coin',
            transcription: '[kɔɪn]',
            translation: 'монета',
            category: 'Работа и деньги',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'change',
            transcription: '[ʧeɪnʤ]',
            translation: 'сдача, мелочь',
            category: 'Работа и деньги',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'payment',
            transcription: '[ˈpeɪmənt]',
            translation: 'платеж',
            category: 'Работа и деньги',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'check (cheque)',
            transcription: '[ʧɛk]',
            translation: 'чек',
            category: 'Работа и деньги',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'bank',
            transcription: '[bæŋk]',
            translation: 'банк',
            category: 'Работа и деньги',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'ATM (automated teller machine)',
            transcription: '[eɪ-tiː-ɛm] [ˈɔːtəmeɪtɪd ˈtɛlə məˈʃiːn]',
            translation: 'банкомат',
            category: 'Работа и деньги',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'bank card',
            transcription: '[bæŋk kɑːd]',
            translation: 'банковская карта',
            category: 'Работа и деньги',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'tips',
            transcription: '[tɪps]',
            translation: 'чаевые',
            category: 'Работа и деньги',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'receipt',
            transcription: '[rɪˈsiːt]',
            translation: 'чек',
            category: 'Работа и деньги',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'money transfer',
            transcription: '[ˈmʌni ˈtrænsfə(ː)]',
            translation: 'денежный перевод',
            category: 'Работа и деньги',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'fine',
            transcription: '[faɪn]',
            translation: 'штраф',
            category: 'Работа и деньги',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'budget',
            transcription: '[ˈbʌʤɪt]',
            translation: 'бюджет',
            category: 'Работа и деньги',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'food',
            transcription: '[fuːd]',
            translation: 'еда',
            category: 'Еда и напитки',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'breakfast',
            transcription: '[ˈbrɛkfəst]',
            translation: 'завтрак',
            category: 'Еда и напитки',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'dinner',
            transcription: '[ˈdɪnə]',
            translation: 'обед',
            category: 'Еда и напитки',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'lunch',
            transcription: '[lʌnʧ]',
            translation: 'ланч',
            category: 'Еда и напитки',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'supper',
            transcription: '[ˈsʌpə]',
            translation: 'ужин',
            category: 'Еда и напитки',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'meal',
            transcription: '[miːl]',
            translation: 'блюдо, прием пищи',
            category: 'Еда и напитки',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'drink, beverage',
            transcription: '[drɪŋk], [ˈbɛvərɪʤ]',
            translation: 'напиток',
            category: 'Еда и напитки',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'alcohol',
            transcription: '[ˈælkəhɒl]',
            translation: 'алкоголь',
            category: 'Еда и напитки',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'water',
            transcription: '[ˈwɔːtə]',
            translation: 'вода',
            category: 'Еда и напитки',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'coffee',
            transcription: '[ˈkɒfi]',
            translation: 'кофе',
            category: 'Еда и напитки',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'tea',
            transcription: '[tiː]',
            translation: 'чай',
            category: 'Еда и напитки',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'wine',
            transcription: '[waɪn]',
            translation: 'вино',
            category: 'Еда и напитки',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'juice',
            transcription: '[ʤuːs]',
            translation: 'сок',
            category: 'Еда и напитки',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'meat',
            transcription: '[miːt]',
            translation: 'мясо',
            category: 'Еда и напитки',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'cereal',
            transcription: '[ˈsɪərɪəl]',
            translation: 'хлопья',
            category: 'Еда и напитки',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'bread',
            transcription: '[brɛd]',
            translation: 'хлеб',
            category: 'Еда и напитки',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'vegetables',
            transcription: '[ˈvɛʤɪtəblz]',
            translation: 'овощи',
            category: 'Еда и напитки',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'fruit',
            transcription: '[fruːt]',
            translation: 'фрукты',
            category: 'Еда и напитки',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'fish',
            transcription: '[fɪʃ]',
            translation: 'рыба',
            category: 'Еда и напитки',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'oil',
            transcription: '[ɔɪl]',
            translation: 'растительное масло',
            category: 'Еда и напитки',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'butter',
            transcription: '[ˈbʌtə]',
            translation: 'сливочное масло',
            category: 'Еда и напитки',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'snack',
            transcription: '[snæk]',
            translation: 'снэк, закуска',
            category: 'Еда и напитки',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'candy',
            transcription: '[ˈkændi]',
            translation: 'конфета (леденец)',
            category: 'Еда и напитки',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'pastry',
            transcription: '[ˈpeɪstri]',
            translation: 'выпечка',
            category: 'Еда и напитки',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'diet',
            transcription: '[ˈdaɪət]',
            translation: 'диета',
            category: 'Еда и напитки',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'fridge, refrigerator',
            transcription: '[frɪʤ], [rɪˈfrɪʤəreɪtə]',
            translation: 'холодильник',
            category: 'Еда и напитки',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'fork',
            transcription: '[fɔːk]',
            translation: 'вилка',
            category: 'Еда и напитки',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'spoon',
            transcription: '[spuːn]',
            translation: 'ложка',
            category: 'Еда и напитки',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'glass',
            transcription: '[glɑːs]',
            translation: 'стакан',
            category: 'Еда и напитки',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'cup',
            transcription: '[kʌp]',
            translation: 'чашка',
            category: 'Еда и напитки',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'mug',
            transcription: '[mʌg]',
            translation: 'кружка',
            category: 'Еда и напитки',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'plate, dish',
            transcription: '[pleɪt], [dɪʃ]',
            translation: 'тарелка',
            category: 'Еда и напитки',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'study',
            transcription: '[ˈstʌdi]',
            translation: 'изучение, исследование',
            category: 'Образование',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'school',
            transcription: '[skuːl]',
            translation: 'школа',
            category: 'Образование',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'college',
            transcription: '[ˈkɒlɪʤ]',
            translation: 'колледж',
            category: 'Образование',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'university',
            transcription: '[ˌjuːnɪˈvɜːsɪti]',
            translation: 'университет',
            category: 'Образование',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'education',
            transcription: '[ˌɛdju(ː)ˈkeɪʃən]',
            translation: 'образование',
            category: 'Образование',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'degree',
            transcription: "[dɪ'griː]",
            translation: 'ученая степень',
            category: 'Образование',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'graduate',
            transcription: '[ˈgrædjʊət]',
            translation: 'выпускник',
            category: 'Образование',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'diploma',
            transcription: '[dɪˈpləʊmə]',
            translation: 'диплом',
            category: 'Образование',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'textbook',
            transcription: '[ˈtɛkstbʊk]',
            translation: 'учебник',
            category: 'Образование',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'notebook, copybook',
            transcription: '[ˈnəʊtbʊk], [ˈkɒpɪbʊk]',
            translation: 'тетрадь',
            category: 'Образование',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'notepad',
            transcription: '[ˈnəʊtˌpæd]',
            translation: 'блокнот',
            category: 'Образование',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'pen',
            transcription: '[pɛn]',
            translation: 'авторучка',
            category: 'Образование',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'pencil',
            transcription: '[ˈpɛnsl]',
            translation: 'карандаш',
            category: 'Образование',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'blackboard',
            transcription: '[ˈblækbɔːd]',
            translation: 'школьная доска',
            category: 'Образование',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'whiteboard',
            transcription: '[ˈwaɪtbɔːd]',
            translation: 'маркерная доска',
            category: 'Образование',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'classroom',
            transcription: '[ˈklɑːsrʊm]',
            translation: 'класс (помещение)',
            category: 'Образование',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'class, lesson',
            transcription: '[klɑːs], [ˈlɛsn]',
            translation: 'урок',
            category: 'Образование',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'grade',
            transcription: '[greɪd]',
            translation: 'класс (этап обучения)',
            category: 'Образование',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'mark, grade',
            transcription: '[mɑːk], [greɪd]',
            translation: 'оценка',
            category: 'Образование',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'pupil',
            transcription: '[ˈpjuːpl]',
            translation: 'ученик',
            category: 'Образование',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'student',
            transcription: '[ˈstjuːdənt]',
            translation: 'студент',
            category: 'Образование',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'teacher',
            transcription: '[ˈtiːʧə]',
            translation: 'учитель',
            category: 'Образование',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'exam (examination)',
            transcription: '[ɪgˈzæm] [ɪgˌzæmɪˈneɪʃən]',
            translation: 'экзамен',
            category: 'Образование',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'test',
            transcription: '[tɛst]',
            translation: 'тест',
            category: 'Образование',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'color (colour)',
            transcription: '[ˈkʌlə]',
            translation: 'цвет',
            category: 'Цвета',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'black',
            transcription: '[blæk]',
            translation: 'черный',
            category: 'Цвета',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'white',
            transcription: '[waɪt]',
            translation: 'белый',
            category: 'Цвета',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'dark',
            transcription: '[dɑːk]',
            translation: 'темный',
            category: 'Цвета',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'light',
            transcription: '[laɪt]',
            translation: 'светлый',
            category: 'Цвета',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'red',
            transcription: '[rɛd]',
            translation: 'красный',
            category: 'Цвета',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'orange',
            transcription: '[ˈɒrɪnʤ]',
            translation: 'оранжевый',
            category: 'Цвета',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'yellow',
            transcription: '[ˈjɛləʊ]',
            translation: 'желтый',
            category: 'Цвета',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'green',
            transcription: '[griːn]',
            translation: 'зеленый',
            category: 'Цвета',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'blue',
            transcription: '[bluː]',
            translation: 'голубой, синий',
            category: 'Цвета',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'purple',
            transcription: '[ˈpɜːpl]',
            translation: 'фиолетовый (пурпурный)',
            category: 'Цвета',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'violet',
            transcription: '[ˈvaɪəlɪt]',
            translation: 'темно-фиолетовый',
            category: 'Цвета',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'pink',
            transcription: '[pɪŋk]',
            translation: 'розовый',
            category: 'Цвета',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'silver',
            transcription: '[ˈsɪlvə]',
            translation: 'серебристый',
            category: 'Цвета',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'gold',
            transcription: '[gəʊld]',
            translation: 'золотой',
            category: 'Цвета',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'brown',
            transcription: '[braʊn]',
            translation: 'коричневый',
            category: 'Цвета',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'grey (gray)',
            transcription: '[greɪ]',
            translation: 'серый',
            category: 'Цвета',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'big',
            transcription: '[bɪg]',
            translation: 'большой',
            category: 'Вес и размер',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'large, great, huge, enormous',
            transcription: '[lɑːʤ], [greɪt], [hjuːʤ], [ɪˈnɔːməs]',
            translation: 'большой, огромный',
            category: 'Вес и размер',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'small',
            transcription: '[smɔːl]',
            translation: 'маленький',
            category: 'Вес и размер',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'little',
            transcription: '[ˈlɪtl]',
            translation: 'маленький',
            category: 'Вес и размер',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'tiny',
            transcription: '[ˈtaɪni]',
            translation: 'крошечный',
            category: 'Вес и размер',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'long',
            transcription: '[lɒŋ]',
            translation: 'длинный, долгий',
            category: 'Вес и размер',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'tall',
            transcription: '[tɔːl]',
            translation: 'высокий',
            category: 'Вес и размер',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'high',
            transcription: '[haɪ]',
            translation: 'высокий',
            category: 'Вес и размер',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'short',
            transcription: '[ʃɔːt]',
            translation: 'короткий',
            category: 'Вес и размер',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'thin',
            transcription: '[θɪn]',
            translation: 'тонкий',
            category: 'Вес и размер',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'thick',
            transcription: '[θɪk]',
            translation: 'толстый',
            category: 'Вес и размер',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'wide, broad',
            transcription: '[waɪd] [brɔːd]',
            translation: 'широкий',
            category: 'Вес и размер',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'narrow',
            transcription: '[ˈnærəʊ]',
            translation: 'узкий',
            category: 'Вес и размер',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'heavy',
            transcription: '[ˈhɛvi]',
            translation: 'тяжелый (о весе)',
            category: 'Вес и размер',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'light, lightweight',
            transcription: '[laɪt], [ˈlaɪtweɪt]',
            translation: 'легкий (о весе)',
            category: 'Вес и размер',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'good',
            transcription: '[gʊd]',
            translation: 'хороший',
            category: 'Различные качества и свойства',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'bad',
            transcription: '[bæd]',
            translation: 'плохой',
            category: 'Различные качества и свойства',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'cheap',
            transcription: '[ʧiːp]',
            translation: 'дешевый',
            category: 'Различные качества и свойства',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'expensive',
            transcription: '[ɪksˈpɛnsɪv]',
            translation: 'дорогой (о цене)',
            category: 'Различные качества и свойства',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'convenient, handy, comfortable',
            transcription: '[kənˈviːnjənt], [ˈhændi], [ˈkʌmfətəbl]',
            translation: 'удобный',
            category: 'Различные качества и свойства',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'tasty',
            transcription: '[ˈteɪsti]',
            translation: 'вкусный',
            category: 'Различные качества и свойства',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'sweet',
            transcription: '[swiːt]',
            translation: 'сладкий',
            category: 'Различные качества и свойства',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'salty',
            transcription: '[ˈsɔːlti]',
            translation: 'соленый',
            category: 'Различные качества и свойства',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'bitter',
            transcription: '[ˈbɪtə]',
            translation: 'горький',
            category: 'Различные качества и свойства',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'sour',
            transcription: '[ˈsaʊə]',
            translation: 'кислый',
            category: 'Различные качества и свойства',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'hot',
            transcription: '[hɒt]',
            translation: 'горячий, острый (о вкусе)',
            category: 'Различные качества и свойства',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'cold',
            transcription: '[kəʊld]',
            translation: 'холодный',
            category: 'Различные качества и свойства',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'cool',
            transcription: '[kuːl]',
            translation: 'прохладный, клевый (сленг)',
            category: 'Различные качества и свойства',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'distgusting',
            transcription: '[dɪstgˈʌstɪŋ]',
            translation: 'мерзкий (о вкусе)',
            category: 'Различные качества и свойства',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'ugly',
            transcription: '[ˈʌgli]',
            translation: 'отвратительный (о внешности)',
            category: 'Различные качества и свойства',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'beautiful',
            transcription: '[ˈbjuːtəfʊl]',
            translation: 'красивый',
            category: 'Различные качества и свойства',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'scary',
            transcription: '[ˈskeəri]',
            translation: 'страшный',
            category: 'Различные качества и свойства',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'funny',
            transcription: '[ˈfʌni]',
            translation: 'смешной',
            category: 'Различные качества и свойства',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'interesting',
            transcription: '[ˈɪntrɪstɪŋ]',
            translation: 'интересный',
            category: 'Различные качества и свойства',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'boring',
            transcription: '[ˈbɔːrɪŋ]',
            translation: 'скучный',
            category: 'Различные качества и свойства',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'true',
            transcription: '[truː]',
            translation: 'правдивый, истинный',
            category: 'Различные качества и свойства',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'false',
            transcription: '[fɔːls]',
            translation: 'ложный',
            category: 'Различные качества и свойства',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'useful',
            transcription: '[ˈjuːsfʊl]',
            translation: 'полезный',
            category: 'Различные качества и свойства',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'useless',
            transcription: '[ˈjuːslɪs]',
            translation: 'бесполезный',
            category: 'Различные качества и свойства',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'soft',
            transcription: '[sɒft]',
            translation: 'мягкий',
            category: 'Различные качества и свойства',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'solid',
            transcription: '[ˈsɒlɪd]',
            translation: 'твердый',
            category: 'Различные качества и свойства',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'liquid',
            transcription: '[ˈlɪkwɪd]',
            translation: 'жидкий',
            category: 'Различные качества и свойства',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'hard',
            transcription: '[hɑːd]',
            translation: 'жесткий',
            category: 'Различные качества и свойства',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'easy, simple',
            transcription: '[ˈiːzi], [ˈsɪmpl]',
            translation: 'легкий, простой',
            category: 'Различные качества и свойства',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'hard, difficult',
            transcription: '[hɑːd], [ˈdɪfɪkəlt]',
            translation: 'трудный, сложный',
            category: 'Различные качества и свойства',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'young',
            transcription: '[jʌŋ]',
            translation: 'молодой',
            category: 'Качества, характер человека',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'old',
            transcription: '[əʊld]',
            translation: 'старый',
            category: 'Качества, характер человека',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'adult',
            transcription: '[əˈdʌlt]',
            translation: 'взрослый',
            category: 'Качества, характер человека',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'lazy',
            transcription: '[ˈleɪzi]',
            translation: 'ленивый',
            category: 'Качества, характер человека',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'hardworking',
            transcription: '[ˈhɑːdˌwɜːkɪŋ]',
            translation: 'трудолюбивый',
            category: 'Качества, характер человека',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'smart',
            transcription: '[smɑːt]',
            translation: 'умный',
            category: 'Качества, характер человека',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'stupid',
            transcription: '[ˈstjuːpɪd]',
            translation: 'глупый',
            category: 'Качества, характер человека',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'kind',
            transcription: '[kaɪnd]',
            translation: 'добрый',
            category: 'Качества, характер человека',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'mean',
            transcription: '[miːn]',
            translation: 'злой, подлый, нехороший',
            category: 'Качества, характер человека',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'good',
            transcription: '[gʊd]',
            translation: 'хороший, добрый',
            category: 'Качества, характер человека',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'bad',
            transcription: '[bæd]',
            translation: 'плохой',
            category: 'Качества, характер человека',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'nice',
            transcription: '[naɪs]',
            translation: 'приятный, милый',
            category: 'Качества, характер человека',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'cute',
            transcription: '[kjuːt]',
            translation: 'милый',
            category: 'Качества, характер человека',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'optimistic',
            transcription: '[ˌɒptɪˈmɪstɪk]',
            translation: 'оптимистичный',
            category: 'Качества, характер человека',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'pessimistic',
            transcription: '[ˌpɛsɪˈmɪstɪk]',
            translation: 'пессимистичный',
            category: 'Качества, характер человека',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'curious',
            transcription: '[ˈkjʊərɪəs]',
            translation: 'любопытный',
            category: 'Качества, характер человека',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'positive',
            transcription: '[ˈpɒzətɪv]',
            translation: 'позитивный',
            category: 'Качества, характер человека',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'cruel',
            transcription: '[krʊəl]',
            translation: 'жестокий',
            category: 'Качества, характер человека',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'calm',
            transcription: '[kɑːm]',
            translation: 'спокойный',
            category: 'Качества, характер человека',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'brave',
            transcription: '[breɪv]',
            translation: 'смелый',
            category: 'Качества, характер человека',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'cowardly',
            transcription: '[ˈkaʊəd]',
            translation: 'трусливый',
            category: 'Качества, характер человека',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'cool',
            transcription: '[kuːl]',
            translation: 'клевый, крутой, прикольный',
            category: 'Качества, характер человека',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'tough',
            transcription: '[tʌf]',
            translation: 'крутой',
            category: 'Качества, характер человека',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'honest',
            transcription: '[ˈɒnɪst]',
            translation: 'честный',
            category: 'Качества, характер человека',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'happy',
            transcription: '[ˈhæpi]',
            translation: 'счастливый',
            category: 'Качества, характер человека',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'sad',
            transcription: '[sæd]',
            translation: 'печальный',
            category: 'Качества, характер человека',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'angry',
            transcription: '[ˈæŋgri]',
            translation: 'сердитый',
            category: 'Качества, характер человека',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'scared',
            transcription: '[skeəd]',
            translation: 'испуганный',
            category: 'Качества, характер человека',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'tired',
            transcription: '[ˈtaɪəd]',
            translation: 'уставший',
            category: 'Качества, характер человека',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'bored',
            transcription: '[bɔːd]',
            translation: 'скучающий',
            category: 'Качества, характер человека',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'helpful',
            transcription: '[ˈhɛlpfʊl]',
            translation: 'готовый помочь',
            category: 'Качества, характер человека',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'reliable',
            transcription: '[rɪˈlaɪəbl]',
            translation: 'надежный',
            category: 'Качества, характер человека',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'responsible',
            transcription: '[rɪsˈpɒnsəbl]',
            translation: 'ответственный',
            category: 'Качества, характер человека',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'now',
            transcription: '[naʊ]',
            translation: 'сейчас',
            category: 'Наречия времени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'then',
            transcription: '[ðɛn]',
            translation: 'тогда',
            category: 'Наречия времени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'again',
            transcription: '[əˈgɛn]',
            translation: 'снова',
            category: 'Наречия времени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'always',
            transcription: '[ˈɔːlweɪz]',
            translation: 'всегда',
            category: 'Наречия времени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'never',
            transcription: '[ˈnɛvə]',
            translation: 'никогда',
            category: 'Наречия времени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'soon',
            transcription: '[suːn]',
            translation: 'скоро',
            category: 'Наречия времени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'late',
            transcription: '[leɪt]',
            translation: 'поздно',
            category: 'Наречия времени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'early',
            transcription: '[ˈɜːli]',
            translation: 'рано',
            category: 'Наречия времени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'before',
            transcription: '[bɪˈfɔː]',
            translation: 'до',
            category: 'Наречия времени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'after',
            transcription: '[ˈɑːftə]',
            translation: 'после',
            category: 'Наречия времени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'yesterday',
            transcription: '[ˈjɛstədeɪ]',
            translation: 'вчера',
            category: 'Наречия времени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'today',
            transcription: '[təˈdeɪ]',
            translation: 'сегодня',
            category: 'Наречия времени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'tomorrow',
            transcription: '[təˈmɒrəʊ]',
            translation: 'завтра',
            category: 'Наречия времени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'next week (year)',
            transcription: '[nɛkst wiːk] [jɪə]',
            translation: 'на следующей неделе (в след. году)',
            category: 'Наречия времени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'every day (week, month)',
            transcription: '[ˈɛvri deɪ] [wiːk] [mʌnθ]',
            translation: 'каждый день (неделю, месяц)',
            category: 'Наречия времени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'this morning (afternoon)',
            transcription: '[ðɪs ˈmɔːnɪŋ] [ˈɑːftəˈnuːn]',
            translation: 'этим утром (днем)',
            category: 'Наречия времени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'tonight',
            transcription: '[təˈnaɪt]',
            translation: 'этим вечером (ночью)',
            category: 'Наречия времени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'sometimes',
            transcription: '[ˈsʌmtaɪmz]',
            translation: 'иногда',
            category: 'Наречия времени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'often',
            transcription: '[ˈɒf (t)(ə)n]',
            translation: 'часто',
            category: 'Наречия времени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'rarely, seldom',
            transcription: '[ˈreəli], [ˈsɛldəm]',
            translation: 'редко',
            category: 'Наречия времени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'recently',
            transcription: '[ˈriːsntli]',
            translation: 'недавно',
            category: 'Наречия времени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'lately',
            transcription: '[ˈleɪtli]',
            translation: 'в последнее время',
            category: 'Наречия времени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'once',
            transcription: '[wʌns]',
            translation: 'однажды',
            category: 'Наречия времени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'usually',
            transcription: '[ˈjuːʒʊəli]',
            translation: 'обычно',
            category: 'Наречия времени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'already',
            transcription: '[ɔːlˈrɛdi]',
            translation: 'уже',
            category: 'Наречия времени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'yet',
            transcription: '[jɛt]',
            translation: 'уже',
            category: 'Наречия времени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'not yet',
            transcription: '[nɒt jɛt]',
            translation: 'еще не',
            category: 'Наречия времени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'still',
            transcription: '[stɪl]',
            translation: 'все еще',
            category: 'Наречия времени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'here',
            transcription: '[hɪə]',
            translation: 'здесь',
            category: 'Наречия места',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'there',
            transcription: '[ðeə]',
            translation: 'там',
            category: 'Наречия места',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'where',
            transcription: '[weə]',
            translation: 'где',
            category: 'Наречия места',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'around',
            transcription: '[əˈraʊnd]',
            translation: 'вокруг',
            category: 'Наречия места',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'inside',
            transcription: '[ɪnˈsaɪd]',
            translation: 'внутри',
            category: 'Наречия места',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'outside',
            transcription: '[ˌaʊtˈsaɪd]',
            translation: 'снаружи',
            category: 'Наречия места',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'above',
            transcription: '[əˈbʌv]',
            translation: 'над',
            category: 'Наречия места',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'under, below',
            transcription: '[ˈʌndə], [bɪˈləʊ]',
            translation: 'под',
            category: 'Наречия места',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'somewhere',
            transcription: '[ˈsʌmweə]',
            translation: 'где-то',
            category: 'Наречия места',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'anywhere',
            transcription: '[ˈɛnɪweə]',
            translation: 'где-нибудь, хоть где',
            category: 'Наречия места',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'nowhere',
            transcription: '[ˈnəʊweə]',
            translation: 'нигде',
            category: 'Наречия места',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'only',
            transcription: '[ˈəʊnli]',
            translation: 'только',
            category: 'Наречия меры и степени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'much',
            transcription: '[mʌʧ]',
            translation: 'много',
            category: 'Наречия меры и степени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'little',
            transcription: '[ˈlɪtl]',
            translation: 'мало',
            category: 'Наречия меры и степени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'very',
            transcription: '[ˈvɛri]',
            translation: 'очень',
            category: 'Наречия меры и степени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'so',
            transcription: '[səʊ]',
            translation: 'так',
            category: 'Наречия меры и степени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'enough',
            transcription: '[ɪˈnʌf]',
            translation: 'достаточно',
            category: 'Наречия меры и степени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'almost',
            transcription: '[ˈɔːlməʊst]',
            translation: 'почти',
            category: 'Наречия меры и степени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'well',
            transcription: '[wɛl]',
            translation: 'хорошо',
            category: 'Наречия образа действия',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'bad',
            transcription: '[bæd]',
            translation: 'плохо',
            category: 'Наречия образа действия',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'fast',
            transcription: '[fɑːst]',
            translation: 'быстро',
            category: 'Наречия образа действия',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'quickly',
            transcription: '[ˈkwɪkli]',
            translation: 'быстро',
            category: 'Наречия образа действия',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'slowly',
            transcription: '[ˈsləʊli]',
            translation: 'медленно',
            category: 'Наречия образа действия',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'too ( + наречие)',
            transcription: '[tuː]',
            translation: 'слишком (+ наречие)',
            category: 'Наречия образа действия',
            partOfSpeach: 'Наречия'
          }
        ]
      }
    ];
    return { dictionaries };
  }
}
